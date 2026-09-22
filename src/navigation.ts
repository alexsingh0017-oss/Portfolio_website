import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/#home'),
    },
    {
      text: 'Work',
      href: getPermalink('/#work'),
    },
    {
      text: 'About',
      href: getPermalink('/#about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
  ],
  actions: [{ text: 'Email me', href: 'mailto:hello@alexsingh.com.np', icon: 'tabler:mail' }],
};

export const footerData = {
  links: [
    {
      title: 'Explore',
      links: [
        { text: 'Home', href: getPermalink('/#home') },
        { text: 'Work', href: getPermalink('/#work') },
        { text: 'About', href: getPermalink('/#about') },
        { text: 'Contact', href: getPermalink('/#contact') },
      ],
    },
    {
      title: 'Elsewhere',
      links: [
        { text: 'Email', href: 'mailto:hello@alexsingh.com.np' },
        { text: 'GitHub', href: 'https://github.com/alexsingh0017-oss' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/alexsingh0017-oss' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © ${new Date().getFullYear()} Alex Singh. Built with care.
  `,
};
