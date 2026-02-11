import md from 'markdown-it';
import mda from 'markdown-it-anchor';

export default defineNuxtPlugin(() => {
  // Custom slugify function to make remove special characters from Czech anchors
  const slugify = (s) => {
    return encodeURIComponent(
      String(s).trim().toLowerCase().replace(/\s+/g, '-')
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    )
  }
  const renderer = md().use(mda, { slugify });
  return {
    provide: {
      md: renderer,
    },
  };
});
