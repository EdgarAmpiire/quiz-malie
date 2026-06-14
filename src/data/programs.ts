export interface ProgramSection {
  heading: string;
  body?: string[];
  bullets?: string[];
  afterBullets?: string[];
}

export interface Program {
  slug: string;
  title: string;
  category: string;
  cardMeta: string;
  tagline: string;
  heroImage: string;
  intro: string[];
  mission: string;
  vision: string;
  impact: string[];
  sections?: ProgramSection[];
  registration?: string[];
  gallery: { src: string; alt: string }[];
  brand?: {
    primary: string;
    primaryOnDark: string;
    deep: string;
    accent: string;
  };
  logo?: string;
  youtube?: string;
}

const placeholder = (id: string, alt: string) => ({
  src: `https://images.unsplash.com/${id}?w=800&q=80`,
  alt,
});

export const programs: Program[] = [
  {
    slug: 'face-to-face-school-quiz',
    title: 'Face-to-Face School Quiz Competition',
    category: 'Educational Quiz Competition',
    cardMeta: 'NTV Uganda · Saturdays 11:00 AM',
    tagline: 'Learning Beyond Memorization, Building Excellence Through Knowledge.',
    logo: '/programs/face-to-face-logo.png',
    brand: {
      primary: '#D80060',
      primaryOnDark: '#FF2E86',
      deep: '#1E4E9B',
      accent: '#D80060',
    },
    heroImage: '/programs/face-to-face-school-quiz/hero.jpg',
    intro: [
      "Face-to-Face School Quiz Competition is one of Uganda's leading educational quiz programs for primary school learners aged 7 to 15 years. Organized by Quiz Malie Studios, the competition has been running successfully for the past 8 years, providing an engaging platform where pupils demonstrate their knowledge, creativity, confidence, and understanding of classroom learning.",
      "The competition was established with a clear mission: to eliminate the culture of cramming and promote meaningful learning. By encouraging learners to apply knowledge, think critically, and solve problems, it helps pupils develop a deeper understanding of what they study in school.",
      "Over the years, the competition has directly engaged more than 200,000 pupils from schools across Uganda while reaching over 3 million Ugandans through television broadcasts and online platforms. It has become a trusted educational initiative that supports academic excellence and inspires young learners to pursue knowledge beyond the classroom.",
      "Broadcast every Saturday at 11:00 AM on NTV Uganda, the show brings together talented pupils from different schools to compete in a fun, educational, and intellectually stimulating environment — rewarding academic achievement while building confidence, teamwork, communication skills, and a passion for lifelong learning.",
    ],
    mission: 'To promote understanding-based learning by encouraging pupils to think critically, apply knowledge, and develop confidence through academic competition.',
    vision: 'To nurture a generation of knowledgeable, innovative, and confident young learners who excel academically and contribute positively to society.',
    impact: [
      '8 years of successful educational competitions.',
      'More than 200,000 pupils directly engaged.',
      'Over 3 million Ugandans reached through television and digital platforms.',
      'Promotes understanding and application of knowledge rather than cramming.',
      'Builds confidence, teamwork, communication, and critical-thinking skills.',
      'Broadcast nationwide every Saturday at 11:00 AM on NTV Uganda.',
    ],
    registration: [
      "Registration for the next edition of the Face-to-Face School Quiz Competition is now ongoing. Schools are invited to register their pupils and join Uganda's most exciting educational quiz platform.",
      'Give your learners an opportunity to showcase their knowledge, build confidence, and compete with the best young minds from across the country.',
    ],
    youtube: 'https://www.youtube.com/watch?v=l2sLNlM-dHs&list=PLoPqBk_KNOuU82geSR1MnHq-1npMv_Zpa',
    gallery: [
      placeholder('photo-1427504494785-3a9ca7044f45', 'Pupils at the quiz competition'),
      placeholder('photo-1580582932707-520aed937b7b', 'School quiz session'),
      placeholder('photo-1523240795612-9a054b0db644', 'Competition stage'),
      placeholder('photo-1503676260728-1c00da094a0b', 'Young learners'),
      placeholder('photo-1509062522246-3755977927d7', 'Classroom learning'),
      placeholder('photo-1524178232363-1fb2b075b655', 'Students celebrating'),
    ],
  },
  {
    slug: 'high-school-crossfire-debates',
    title: 'High School Crossfire Debates',
    category: 'Debate & Public Speaking',
    cardMeta: 'National · Central, Western, Eastern & Northern',
    tagline: 'Developing Thinkers, Building Leaders, Shaping the Future.',
    logo: '/programs/crossfire-logo.png',
    brand: {
      primary: '#D8A848',
      primaryOnDark: '#F0D878',
      deep: '#1E3C82',
      accent: '#9A1E1E',
    },
    heroImage: '/programs/high-school-crossfire-debates/hero.jpg',
    intro: [
      "High School Crossfire Debates is Uganda's premier national debate and public speaking competition, bringing together secondary schools from the country's four regions: Central, Western, Eastern, and Northern Uganda. For over 10 years, the program has been empowering young people with critical thinking, research, communication, leadership, and problem-solving skills that prepare them for academic excellence and future careers.",
      "Since its inception, the program has engaged more than 2,000 secondary schools across Uganda, directly impacting over 1 million students and indirectly reaching more than 3 million viewers through nationwide media coverage and broadcasts on leading platforms, including NTV Uganda and the New Vision Group.",
      "The competition gives students a unique platform to discuss national, regional, and global issues, encouraging them to develop informed perspectives, conduct research, and confidently articulate their ideas. Through rigorous training and mentorship, participants become knowledgeable, responsible, and influential leaders within their schools, communities, and future professions.",
      "Each year, the program crowns national champions who earn the opportunity to represent Uganda in prestigious international debate competitions across Europe and Asia, where Ugandan participants have consistently demonstrated excellence and returned with international recognition.",
    ],
    mission: 'To empower young people through debate, research, and public speaking by developing critical thinking, leadership, communication, and analytical skills that prepare them to become responsible citizens and future leaders.',
    vision: 'To build a generation of informed, confident, and transformative leaders who will shape the future of Uganda, Africa, and the world through knowledge, dialogue, and innovation.',
    impact: [
      'Over 10 years of successful annual competitions.',
      'More than 2,000 schools engaged across Uganda.',
      'Over 1 million students directly trained and mentored.',
      'More than 3 million people reached through television and media.',
      'National representation from all four regions of Uganda.',
      'International participation in debates across Europe and Asia.',
      'Thousands of young leaders empowered with research and leadership skills.',
    ],
    registration: [
      "Registration for the next edition of the High School Crossfire Debates is now ongoing. Schools are invited to register their students and join Uganda's most exciting school debates.",
      'Give your learners an opportunity to showcase their knowledge, build confidence, and compete with the best young minds from across the country.',
    ],
    youtube: 'https://www.youtube.com/watch?v=czQD3-3T8dg&list=PLoPqBk_KNOuWOI0MT5v6EP06BVt191H8F',
    gallery: [
      placeholder('photo-1475721027785-f74eccf877e2', 'Student debater'),
      placeholder('photo-1505373877841-8d25f7d46678', 'Debate audience'),
      placeholder('photo-1524178232363-1fb2b075b655', 'Students on stage'),
      placeholder('photo-1517486808906-6ca8b3f04846', 'Public speaking'),
      placeholder('photo-1523240795612-9a054b0db644', 'Competition hall'),
      placeholder('photo-1497633762265-9d179a990aa6', 'Award ceremony'),
    ],
  },
  {
    slug: 'the-doc-talk-show',
    title: 'The Doc Talk Show',
    category: 'Health Education Television',
    cardMeta: 'UBC Network · Trusted Health Information',
    tagline: 'Educating Communities, Saving Lives, and Building a Healthier Africa.',
    logo: '/programs/doctalk-logo.png',
    brand: {
      primary: '#28B43C',
      primaryOnDark: '#46CC5A',
      deep: '#0064B4',
      accent: '#28B43C',
    },
    heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&q=85',
    intro: [
      "The Doc Talk Show is one of Uganda's leading health television programs, produced by Quiz Malie Studios and broadcast on the Uganda Broadcasting Corporation (UBC) network. The program was established to bridge the gap between healthcare professionals and the public by providing accurate, accessible, and life-saving health information to Ugandans and audiences across Africa.",
      "The show's primary mission is to educate communities about disease prevention, health promotion, first aid, and healthy living. Through expert discussions, public health campaigns, and medical education, it empowers people with knowledge that helps save lives and improve health outcomes.",
      "Over the years, the program has become a trusted platform for health communication, reaching millions of viewers. During the COVID-19 pandemic, it served as an important source of public health information, supporting national awareness efforts and helping disseminate accurate guidance from health authorities.",
      "The show has featured some of Uganda's most respected medical professionals, with an estimated 70% of Uganda's doctors participating in educating the public on health conditions, prevention strategies, and treatment options. It has also hosted international medical experts, strengthening healthcare awareness across the region.",
    ],
    mission: 'To educate, inform, and empower communities through credible health information that promotes disease prevention, healthy lifestyles, and improved healthcare outcomes.',
    vision: 'To be Africa\'s leading health education television platform, transforming lives through knowledge, awareness, and access to trusted medical information.',
    sections: [
      {
        heading: 'Public Health Campaigns & Partnerships',
        body: [
          'The Doc Talk Show has partnered with government institutions, development organizations, healthcare agencies, and academic institutions to implement impactful health awareness campaigns, including:',
        ],
        bullets: [
          'Yellow Fever Awareness Campaigns with the Ministry of Health Uganda.',
          'Malaria-Free Uganda Campaigns with Green Leaf and the Ministry of Health.',
          'Drug Misuse Prevention Campaigns with the National Drug Authority (NDA).',
          'Blood Donation and Malaria Awareness Campaigns for children under five.',
          'COVID-19 Awareness and Prevention Campaigns with the Ministry of Health Uganda.',
          'Public health education initiatives with Makerere University School of Public Health.',
        ],
        afterBullets: [
          'The program has worked closely with senior government officials, including the Minister of Health and the Permanent Secretary of the Ministry of Health, and international partners such as the World Health Organization (WHO), contributing to national health education and awareness efforts.',
        ],
      },
    ],
    impact: [
      'Leading health television show broadcast on UBC.',
      'Trusted source of health information for millions of viewers.',
      'Instrumental in national COVID-19 awareness campaigns.',
      'Hosted leading Ugandan and international medical experts.',
      'Supported major public health campaigns across Uganda.',
      'Partnered with the Ministry of Health, NDA, Makerere University School of Public Health, and the WHO.',
    ],
    youtube: 'https://www.youtube.com/watch?v=ODtiOq7TtjQ&list=PLoPqBk_KNOuWWGHjyKfRQCOMV-eRfMmcN',
    gallery: [
      placeholder('photo-1576765608535-5f04d1e3f289', 'Health education segment'),
      placeholder('photo-1631217868264-e5b90bb7e133', 'Medical professional'),
      placeholder('photo-1505751172876-fa1923c5c528', 'Doctor on set'),
      placeholder('photo-1538108149393-fbbd81895907', 'Health campaign'),
      placeholder('photo-1584515933487-779824d29309', 'Studio recording'),
      placeholder('photo-1579684385127-1ef15d508118', 'Community health'),
    ],
  },
];
