import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "Resume",
    title: "Resume",
    link: "http://www.github.com/sanidhyy/3d-portfolio/",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;
// Experiences
export const EXPERIENCES = [
  {
    title: "Full-Stack Junior Developer",
    company_name: "Youth Leadership Society of BC",
    icon: tesla, // Keeping the same PNG name
    iconBg: "#FFFFFF",
    date: "Nov 2024 - Jan 2025",
    points: [
      "Refactored the certificate retrieval system, reducing search time by 30% by replacing direct Blob storage links with dynamic file lookup using metadata in Azure CosmoDB.",
      "Optimized the database schema, improving data organization, maintainability, and search accuracy for student certificates across British Columbia.",
      "Programmed on the management dashboard, streamlining the creation of student accounts, resulting in a 25% improvement in administrative efficiency.",
      "Assisted in deploying an email-notification system for automated certificate distribution, minimizing labor expenditure by an estimated $100 to $250 per each program cycle.",
    ],
  },
  {
    title: "Website Design Intern",
    company_name: "Pacific Cellulose Services LTD",
    icon: starbucks, // Keeping the same PNG name
    iconBg: "#1E4D0F",
    date: "June 2024 - Aug 2024",
    points: [
      "Developed and launched the corporate website on Squarespace, attaining internet traffic of 50+ visitors daily across North American and Middle Eastern paper pulp markets.",
      "Constructed an ordering process system that funneled client requests to management, simplifying business operations.",
      "Worked with directors to select impactful visuals of pulp products and compelling words to drive client engagement and improve SEO.",
    ],
  },
  {
    title: "Hardware Technician (Trainee)",
    company_name: "BC Technology for Learning Society",
    icon: shopify, // Keeping the same PNG name
    iconBg: "#012F66",
    date: "July 2023 - Oct 2023",
    points: [
      "Trained at a registered charity, refurbishing a record of 200+ laptops for distribution to schools, businesses, and low-income communities.",
      "Conversed with 10+ clients daily, addressing laptop preferences, pick-up procedures, and resolving complaints.",
      "Maintained inventory by organizing computers and monitors, documenting incoming shipments and donated laptops.",
    ],
  },
] as const;


// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "TradingBook AI",
    description:
      "Next.JS web application with an LLM that answers queries regarding stock-markets & cryptocurrency",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      }
    ],
    image: project1,
    source_code_link: "https://github.com/jasangill1/TradingBook",
    live_site_link: "https://tradingbook.ai/",
  },
  {
    name: "Team Flag Warfare",
    description:
      "3D game modeled on flag the capture games. Developed with Roblox Studio and coded in Lua.",
    tags: [
      {
        name: "robloxstudio",
        color: "blue-text-gradient",
      },
      
      {
        name: "lua",
        color: "pink-text-gradient",
      }
    ],
    image: project2,
    source_code_link: "https://www.roblox.com/games/170542886/Team-Flag-Warfare",
    live_site_link: "https://www.roblox.com/games/170542886/Team-Flag-Warfare",
  },
  {
    name: "Pawpal",
    description:
      "Rent-A-Dog Web Application loosely based on Craiglist posting system. Allows dog owners to rent out their dog.",
    tags: [
      {
        name: "XAAMP",
        color: "green-text-gradient",
      },
      
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },

      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      }
    ],
    image: project3,
    source_code_link: "",
    live_site_link: "",
  }
  
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@OPGAMER.",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sanidhyy",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sanidhyy",
  },
] as const;
