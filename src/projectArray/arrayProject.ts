import { projectElement } from "../types";

import womazing from "../img/sites/womazing.png";
import sedona from "../img/sites/sedona.png";
import yourmeat from "../img/sites/yourmeat.png";
import reactSushi from "../img/sites/react-sushi.png";
import reactSneakers from "../img/sites/react-sneakers.png";

export const projects: projectElement[] = [
  {
    id: 0,
    name: "Womazing",
    url: womazing,
    vercelDemo: "https://clothes-shop-navy.vercel.app/",
    gitHub: "https://github.com/DefRiZ/clothes-shop",
  },
  {
    id: 1,
    name: "Sedona",
    url: sedona,
    vercelDemo: "https://sedona-kappa.vercel.app/",
    gitHub: "https://github.com/DefRiZ/sedona",
  },
  {
    id: 2,
    name: "ReactSushi",
    url: yourmeat,
    vercelDemo: "https://yourmeat.vercel.app/",
    gitHub: "https://github.com/DefRiZ/yourmeat",
  },
  {
    id: 3,
    name: "ReactSushi",
    url: reactSushi,
    gitHub: "https://github.com/DefRiZ/sushi-react",
  },
  {
    id: 4,
    name: "ReactSneakers",
    url: reactSneakers,
    gitHub: "https://github.com/DefRiZ/react-sneakers",
  },
];
