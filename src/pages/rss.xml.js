import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Astro Blog Tutorial',
  description: 'Blog tutorial from Astro docs',
  site: 'https://gesty.dev/astroBlog',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`,
});
