# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn install    # install dependencies
yarn dev        # dev server with hot reload at localhost:3000
yarn build      # production build (SSR)
yarn preview    # preview the production build
yarn generate   # static site generation (bumps Node heap to 8GB via NODE_OPTIONS)
yarn lint       # eslint .
```

There is no test suite in this repo.

## Architecture

This is a Nuxt 3 site (Vue 3, Pinia, Tailwind CSS v4, `@nuxtjs/i18n`) with two distinct content sources —
do not confuse them:

1. **Static/translated copy** — YAML files under `content/cs/**` and `content/en/**`, one collection per
   locale defined in `content.config.js`, read through `@nuxt/content`'s `queryCollection`. This is UI
   text (labels, headings, section copy), not application data.
2. **Dynamic application data** (projects, news posts, events, members) — served by a headless Directus
   CMS at `https://api.www.otevrenamesta.cz`, fetched through `composables/useApi.js` (a thin `$fetch`
   wrapper using `runtimeConfig.public.baseApiUrl`).

### Content loading flow

`stores/content.js` (`useContentStore`, Pinia) exposes `loadGlobal()` and `load({ page })`, which query
the `@nuxt/content` collections. Crucially, both actions are gated on `useNuxtApp().ssrContext` — they
only run during server rendering, never on the client. `app.vue` awaits all page loads (`homepage`,
`about`, `collaboration`, `members`, `contact`, `project`, `declaration`, `events`, `czechOspo`) up
front, so this static copy is baked in at SSR/prerender time and simply hydrates on the client. When
adding a new static-copy page, add its YAML file under both `content/cs/` and `content/en/`, and
register the page key in `stores/content.js` state + the `app.vue` load list.

Dynamic data (e.g. a single project on `pages/projects/[id].vue`) is instead fetched client-side inside
`onMounted` via `useApi.get(...)`, using Directus's filter/deep query-string syntax directly in the URL.

### Prerendering dynamic routes

Since the site is meant to be fully static (`yarn generate`), `nuxt.config.js` has a `nitro:config` hook
that (outside of dev) calls the Directus API directly to list project/news/event IDs and pushes
`/projects/:id`, `/news/:id`, `/events/:id` into `nitro.prerender.routes` so those dynamic pages get
generated too.

### i18n

`@nuxtjs/i18n` with locales `cs` (default) and `en`, strategy `prefix_and_default`, browser detection
disabled. Use `$localePath(...)` for internal links so locale prefixing stays correct (see
`pages/projects/[id].vue` for an example).

### State (Pinia)

Stores live in `stores/` and are auto-imported (`imports.dirs` in `nuxt.config.js`). Currently:
`content.js` (see above) and `ui.js` (small UI flags, e.g. burger menu open state).

### Components and pages

Components are grouped by the page/section they belong to (`components/homepage`, `components/about`,
`components/project`, `components/members`, etc.) rather than by generic type. Routes in `pages/` mirror
this: static pages (`index`, `about`, `contact`, `collaboration`, `members`, `declaration`, `gdpr`,
`czech-ospo`) plus listing + detail pairs for `projects`, `news`, and `events`.

### Assets and other notables

- SVGs in `assets/img` are imported directly as Vue components via `vite-svg-loader` (e.g.
  `import IconArrowLeftLink from '~/assets/img/icon-arrow-left-link.svg'`), not referenced as `<img>`
  URLs.
- `@nuxt/image` uses the `imagekit` provider against `ik.imagekit.io/davidvesely`.
- `nuxt-lodash` auto-imports lodash functions prefixed with `_` (e.g. `_get`, `_map`); `isNaN`/`isMap`
  are excluded.
- A custom `v-preposition-space` directive (`plugins/v-preposition-space.js`) inserts `&nbsp;` after
  Czech single-letter prepositions/conjunctions (a, i, k, o, s, u, v, z) for correct typography — use it
  on Czech copy where line-wrapping after these matters.
- SEO tags are set via the `useCustomHead({ title, description })` composable, not `useHead` directly, so
  titles get the site suffix and default description consistently.

## Linting

ESLint uses the flat config from `@nuxt/eslint` with stylistic rules enabled (see `eslint.config.mjs`):
2-space indent, single quotes, always semicolons, always-multiline trailing commas, one attribute per
line in Vue templates, always-parens arrow functions. `no-console` and `no-unused-vars` are currently
turned off.
