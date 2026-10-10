// Everything personal lives here — edit this file first.

export const site = {
  name: 'Kalybek Mergenov',
  shortName: 'Kalybek',
  role: 'AI Creator & Prompt Engineer',
  description:
    'AI Creator & Prompt Engineer. I design prompt systems and turn them into films, ads and visuals — built with the models, finished like production.',
  location: 'Open to remote work',

  // Contacts: empty values are hidden automatically.
  email: 'hello@example.com', // TODO: your real email
  cv: '', // e.g. '/cv.pdf' — put the file into /public
  socials: [
    { label: 'Telegram', url: '' },
    { label: 'LinkedIn', url: '' },
    { label: 'Instagram', url: '' },
    { label: 'X', url: '' },
    { label: 'GitHub', url: 'https://github.com/mqalybek' },
  ],

  // Hero showreel: short silent loop. Can be a local mp4 or a Bunny .m3u8 link.
  showreel: {
    src: '/media/showreel/reel.mp4',
    poster: '/media/showreel/poster.jpg',
  },

  // Tools shown in the marquee and on the About page.
  stack: [
    { group: 'Image', tools: ['Midjourney', 'Flux', 'Ideogram', 'Krea', 'ComfyUI', 'Photoshop AI'] },
    { group: 'Video', tools: ['Kling', 'Runway', 'Veo', 'Sora', 'Higgsfield', 'Luma'] },
    { group: 'Sound', tools: ['ElevenLabs', 'Suno', 'Udio'] },
    { group: 'Language', tools: ['Claude', 'ChatGPT', 'Gemini', 'Claude Code'] },
    { group: 'Finish', tools: ['DaVinci Resolve', 'After Effects', 'Topaz', 'CapCut'] },
  ],
};

export const categories = [
  'Video',
  'Image',
  'Brand & Ads',
  'Characters',
  'Prompt Engineering',
  'Automation',
] as const;
