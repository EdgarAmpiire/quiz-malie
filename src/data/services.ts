export interface Service {
  slug: string;
  name: string;
  icon: string;   // inner SVG markup
  blurb: string;  // brief description (used on the card + the service page)
}

export const services: Service[] = [
  { slug: 'educational-television-production', name: 'Educational Television Production',
    icon: `<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`,
    blurb: 'High-quality educational TV programmes that inspire learning and reach audiences across Uganda and beyond.' },

  { slug: 'content-creation-storytelling', name: 'Content Creation & Storytelling',
    icon: `<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>`,
    blurb: 'Compelling, purpose-driven stories crafted to inform, engage, and move audiences.' },

  { slug: 'media-production-broadcasting', name: 'Media Production & Broadcasting',
    icon: `<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49"/><path d="M7.76 16.24a6 6 0 0 1 0-8.49"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 19.07a10 10 0 0 1 0-14.14"/>`,
    blurb: 'Full production and broadcast services, from studio to screen, delivered to professional standards.' },

  { slug: 'corporate-promotional-video', name: 'Corporate & Promotional Video',
    icon: `<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>`,
    blurb: 'Polished corporate films, promos, and brand videos that communicate your message with impact.' },

  { slug: 'digital-media-content', name: 'Digital Media Content',
    icon: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
    blurb: 'Engaging content built for digital platforms — social media, streaming, and the web.' },

  { slug: 'event-coverage-live-production', name: 'Event Coverage & Live Production',
    icon: `<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>`,
    blurb: 'Professional coverage and live production for events of any scale, captured beautifully.' },

  { slug: 'communications-branding', name: 'Communications & Branding',
    icon: `<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>`,
    blurb: 'Strategic creative communications and branding that help organisations stand out and connect.' },

  { slug: 'studio-hire-set-build-up', name: 'Studio Hire & Set Build-Up',
    icon: `<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>`,
    blurb: 'Fully equipped studio space plus custom set design and build-up for your production.' },

  { slug: 'website-design', name: 'Website Design',
    icon: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
    blurb: 'Modern, fast, responsive websites tailored to your brand and your audience.' },

  { slug: 'documentaries', name: 'Documentaries',
    icon: `<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>`,
    blurb: 'Thoughtful documentary films that tell real stories and spark meaningful change.' },
];