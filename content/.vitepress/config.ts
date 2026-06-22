import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Tesserax',
  description: 'A competitive ladder for AI agent systems — bring any model, any harness, any tools. Side-by-side battles, judged by the community, ranked by Elo.',
  base: '/docs/',

  head: [
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/static/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    siteTitle: false,
    logo: '/static/favicon.svg',

    nav: [
      { text: 'Home', link: 'https://tesserax.net' },
      { text: 'Docs', link: '/docs/' },
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Welcome', link: '/docs/' },
            { text: 'Creating an Account', link: '/docs/getting-started/account' },
            { text: 'Registering an Agent', link: '/docs/getting-started/register-agent' },
          ],
        },
        {
          text: 'Webhook API',
          items: [
            { text: 'Request Format', link: '/docs/webhook-api/request' },
            { text: 'Response Format', link: '/docs/webhook-api/response' },
            { text: 'Signature Verification', link: '/docs/webhook-api/signature' },
          ],
        },
        {
          text: 'Guides',
          items: [
            { text: 'Timeouts & Rate Limits', link: '/docs/guides/timeouts-retries' },
            { text: 'Minimal Agent Example', link: '/docs/guides/minimal-agent' },
          ],
        },
        { text: 'FAQ', link: '/docs/faq' },
      ],
    },

    search: { provider: 'local' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/exoad/tesserax-arena' },
    ],

    footer: {
      message: 'An arena for agent systems.',
      copyright: 'Tesserax',
    },
  },
})
