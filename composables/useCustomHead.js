export default ({ title, description = '' }) => {
  const defaultTitle = useRuntimeConfig().public.title;
  const seoTitle = title ? `${title} | ${useRuntimeConfig().public.name}` : defaultTitle;
  const seoDescription = description || useRuntimeConfig().public.description;

  useHead({
    title: seoTitle,
    meta: [
      { property: 'og:title', content: seoTitle },
      { name: 'description', content: seoDescription },
      { name: 'og:description', content: seoDescription },
    ],
  });
};
