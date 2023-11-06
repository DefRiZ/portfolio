import { projectElement } from "../types";

import womazing from "../img/sites/womazing.png";
import sedona from "../img/sites/sedona.png";
import reactSushi from "../img/sites/react-sushi.png";
import reactSneakers from "../img/sites/react-sneakers.png";

export const projects: projectElement[] = [
  {
    id: 0,
    name: "womazing",
    url: womazing,
    vercelDemo: "https://clothes-shop-navy.vercel.app/",
    gitHub: "https://github.com/DefRiZ/clothes-shop",
  },
  {
    id: 1,
    name: "sedona",
    url: sedona,
    vercelDemo: "https://sedona-kappa.vercel.app/",
    gitHub: "https://github.com/DefRiZ/sedona",
  },
  {
    id: 2,
    name: "reactSushi",
    url: reactSushi,
    gitHub: "https://github.com/DefRiZ/sushi-react",
  },
  {
    id: 3,
    name: "reactSneakers",
    url: reactSneakers,
    gitHub: "https://github.com/DefRiZ/react-sneakers",
  },
];
