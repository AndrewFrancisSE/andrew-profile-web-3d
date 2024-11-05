import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  cshap,
  tailwind,
  maui,
  xamarin,
  git,
  figma,
  kotlin,
  angular,
  lovad,
  premierducts,
  threejs,
  mysticsystem,
  mysticmobile,
  lparkingmobile,
  billpos,
  astool,
  asadmin,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Mobile Developer",
    icon: mobile,
  },

  {
    title: "Desktop Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: "C#",
    icon: cshap,
  },
  {
    name: "Maui",
    icon: maui,
  },
  {
    name: "Xamarin",
    icon: xamarin,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Kotlin",
    icon: kotlin,
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
    name: "Tailwind CSS",
    icon: tailwind,
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
];

const experiences: TExperience[] = [
  {
    title: "Software Engineer",
    companyName: "Premier Ducts Pty Ltd",
    icon: premierducts,
    iconBg: "#383E56",
    date: "January 2022 - September 2023",
    points: [
      "Mobile application development with Xamarin (Android/iOS).",
      "Web development using Reactjs, Angular2+, Javascript, Typescript, HTML, CSS.",
      "API Web Service development using REST API.",
      "Database management with MySQL.",
      "UI/UX design with Figma."
    ],
  },
  {
    title: "Software Engineer",
    companyName: "LOVAD Co., Ltd.",
    icon: lovad,
    iconBg: "#E6DEDD",
    date: "January 2020 - Present",
    points: [
      "Mobile application development using Xamarin/Maui/Kotlin (Android/iOS).",
      "Desktop application development using WPF.",
      "Web development using Reactjs, Angular2+, Javascript, Typescript, HTML, CSS.",
      "API Web Service development using REST API.",
      "Database management including SQL Server and PosgreSQL (designing and implementing database tables, optimizing queries).",
      "UI/UX design with Figma.",
      "Technical Leader.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Mystic System",
    description:
        "Centralized camera management software.",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "wpf",
        color: "green-text-gradient",
      },
      {
        name: "webAPI",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: mysticsystem,
    sourceCodeLink: "https://lovad.vn/solution/giai-phap-phan-mem-quan-ly-camera-tap-trung/",
  },
  {
    name: "Mystic Client Mobile",
    description:
        "Centralized camera monitoring software on mobile.",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "maui",
        color: "green-text-gradient",
      },
    ],
    image: mysticmobile,
    sourceCodeLink: "https://play.google.com/store/apps/details?id=com.LOVAD.DVMS_Mobile",
  },
  {
    name: "LParking Mobile",
    description:
        "Mobile Parking Management Software on mobile.",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "maui",
        color: "green-text-gradient",
      },
      {
        name: "xamarin",
        color: "pink-text-gradient",
      },
    ],
    image: lparkingmobile,
    sourceCodeLink: "https://play.google.com/store/apps/details?id=com.lovad.lparking_mobile",
  },
  {
    name: "BillPOS",
    description:
        "Software to manage goods using QR Code and issue e-invoices.",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "webAPI",
        color: "pink-text-gradient",
      },
      {
        name: "maui",
        color: "green-text-gradient",
      }
    ],
    image: billpos,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "AS Tool",
    description:
        "Automated texting and calling software on mobile",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "webAPI",
        color: "green-text-gradient",
      },
      {
        name: "maui",
        color: "pink-text-gradient",
      },
      {
        name: "kotlin",
        color: "green-text-gradient",
      },
    ],
    image: astool,
    sourceCodeLink: "https://www.facebook.com/share/v/5a6YeosaX1G5HyVW/",
  },
  {
    name: "AS Admin",
    description:
        "Website to manage accounts, logs, and revenue of AS Tool software",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "webAPI",
        color: "pink-text-gradient",
      },
      {
        name: "c#",
        color: "blue-text-gradient",
      },
    ],
    image: asadmin,
    sourceCodeLink: "https://www.facebook.com/share/v/5a6YeosaX1G5HyVW/",
  },
];

export { services, technologies, experiences, testimonials, projects };
