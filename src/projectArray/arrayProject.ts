import { projectElement } from "../types";

import womazing from "../img/sites/womazing.png";
import sedona from "../img/sites/sedona.png";
import yourmeat from "../img/sites/yourmeat.png";
import prismatic from "../img/sites/prismatic.png";
import reactSushi from "../img/sites/react-sushi.png";
import reactSneakers from "../img/sites/react-sneakers.png";

export const projects: projectElement[] = [
  {
    id: 0,
    name: "Womazing",
    url: womazing,
    vercelDemo: "https://clothes-shop-navy.vercel.app/",
    gitHub: "https://github.com/DefRiZ/clothes-shop",
    discribe: `Online store for women's clothing. It has the basic logic for such a website. 
    Made with HTML, SCSS, JavaScript, React, Redux Toolkit etc.`,
  },
  {
    id: 1,
    name: "Sedona",
    url: sedona,
    vercelDemo: "https://sedona-kappa.vercel.app/",
    gitHub: "https://github.com/DefRiZ/sedona",
    discribe: `Hotel search in Sedona. Made with HTML, SCSS, TypeScript, React, Redux Toolkit etc. 
    For hotel's list you should run project from terminal with "npm run dev" command.`,
  },
  {
    id: 2,
    name: "YourMeat",
    url: yourmeat,
    vercelDemo: "https://yourmeat.vercel.app/",
    gitHub: "https://github.com/DefRiZ/yourmeat",
    discribe: `Web page for burger ordering. Made with HTML, SCSS, TypeScript, Next.js, Zustand.
    If you can't get burger's list turn on your vpn.`,
  },
  {
    id: 3,
    name: "Prismatic",
    url: prismatic,
    vercelDemo: "https://prismatic-gray.vercel.app/",
    gitHub: "https://github.com/DefRiZ/prismatic",
    discribe: `Adapted dietary supplements landing page.`,
  },
  {
    id: 4,
    name: "ReactSushi",
    url: reactSushi,
    gitHub: "https://github.com/DefRiZ/sushi-react",
    discribe: `My first demo project with ordering logic. Made with HTML, SCSS, TypeScript, 
    React, Redux Toolkit etc`,
  },
  {
    id: 5,
    name: "ReactSneakers",
    url: reactSneakers,
    gitHub: "https://github.com/DefRiZ/react-sneakers",
    discribe: `Demo project with sneaker's ordering logic. Made with HTML, SCSS, TypeScript, 
    React, Redux Toolkit etc`,
  },
];
