import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import portfolioCanopy from '../images/portfolio/portfolio-canopystudio.webp';
import porfolioPlantenow from '../images/portfolio/portfolio-plantenow.webp';
import portfolioRogerEnergy from '../images/portfolio/portfolio-roger-energy.webp';
import portfolioStepback from '../images/portfolio/portfolio-stepback.webp';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Matthieu Brousse - Portfolio',
  description: "Matthieu Brousse's portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Matthieu Brousse.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Fullstack Developer</strong>, currently working as a{' '}
        <strong className="text-stone-100">Freelance</strong>. I'm also learning and developing side projects about{' '}
        <strong className="text-stone-100">Artificial Intelligence</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me traveling in <strong className="text-stone-100">Iceland</strong>, playing{' '}
        <strong className="text-stone-100">squash</strong>, or cooking some{' '}
        <strong className="text-stone-100">nice food</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: `resume.pdf`,
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a Fullstack Developer. 
  I'm seeking employment in a company to grow my experience. I'm eager to
  learn and develop my skills.`,
  aboutItems: [
    {label: 'Location', text: 'Netherlands', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'French', Icon: FlagIcon},
    {label: 'Interests', text: 'Formula 1, High Tech, Traveling & Hiking ', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Reims', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Freelance', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'French',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Dutch',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML',
        level: 8,
      },
      {
        name: 'CSS',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 7,
      },
      {
        name: 'React',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'PHP',
        level: 6,
      },
      {
        name: 'Python',
        level: 3,
      },
      {
        name: 'Node.js',
        level: 7,
      },
    ],
  },
  {
    name: 'Wordpress',
    skills: [
      {
        name: 'Project management',
        level: 9,
      },
      {
        name: 'Frontend development',
        level: 9,
      },
      {
        name: 'PHP development',
        level: 6,
      },
    ],
  },
  {
    name: 'SEO',
    skills: [
      {
        name: 'On-page',
        level: 9,
      },
      {
        name: 'Off-page',
        level: 9,
      },
      {
        name: 'Technical SEO',
        level: 8,
      },
      {
        name: 'Link building',
        level: 8,
      },
      {
        name: 'Content marketing',
        level: 9,
      },
      {
        name: 'Keyword research',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'StepbackShop',
    description: 'E-shop for the Stepback brand.',
    url: 'https://stepbackshop.com',
    image: portfolioStepback,
  },
  {
    title: 'Plantenow.fr',
    description: 'French blog and affiliate website about Plants',
    url: 'https://plantenow.fr',
    image: porfolioPlantenow,
  },
  {
    title: 'ROGER Energy',
    description: 'Company website for ROGER Energy, specialist in hydrogen energy.',
    url: 'https://roger.energy',
    image: portfolioRogerEnergy,
  },
  {
    title: 'Canopy Studio',
    description: 'On demand AI assistant. Find applications for your field or use our general model.',
    url: 'https://canopy-lab.vercel.app',
    image: portfolioCanopy,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2022 - Present',
    location: 'Online',
    title: 'AI & Software Engineer',
    content: <p>I'm currently learning both AI and Fullstack development.</p>,
  },
  {
    date: '2021',
    location: 'Online',
    title: 'Courses Expert SEO',
    content: (
      <p>
        Through SEMRUSH, GOOGLE, and COURSERA, I gained extensive knowledge in SEO, including keyword research, website
        optimization, and how to improve website ranking.
      </p>
    ),
  },
  {
    date: 'June 2013',
    location: 'University of Reims',
    title: 'DUT Civil Engineering',
    content: (
      <p>
        I acquired valuable experience in managing large projects independently, learning to work under pressure, and
        developing solutions for complex problems.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2021 - Present',
    location: 'My company',
    title: 'Freelance Webmaster',
    content: (
      <p>
        As a freelancer, I have gained valuable experience, both professionally and personally. It has taught me to be
        self-motivated, disciplined, and productive. Additionally, I have expanded my knowledge in various areas such as
        SEO, web development, and artificial intelligence.
      </p>
    ),
  },
  {
    date: 'December 2014 - June 2021',
    location: 'Norauto - France',
    title: 'Autopart Seller',
    content: <p>Selling products, managing a team.</p>,
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can reach me via email, this form or on social media.',
  items: [
    {
      type: ContactType.Email,
      text: 'mbro.pro87@gmail.com',
      href: 'mailto:mbro.pro87@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Netherlands',
      href: 'https://www.google.ca/maps/',
    },
    {
      type: ContactType.Instagram,
      text: '@mbr0',
      href: 'https://www.instagram.com/mbr0/',
    },
    {
      type: ContactType.Github,
      text: 'mbr0',
      href: 'https://github.com/mbr0',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mbr0'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/matthieu-brousse-mbr0/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/mbr0/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/mbr0V'},
];
