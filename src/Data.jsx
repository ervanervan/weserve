import imgBrand1 from "./assets/brand-1.svg";
import imgBrand2 from "./assets/brand-2.svg";
import imgBrand3 from "./assets/brand-3.svg";
import imgBrand4 from "./assets/brand-4.svg";
import imgBrand5 from "./assets/brand-5.svg";

import icon3dCube from "./assets/icon-3dcube.svg";
import icon3dCubeWhite from "./assets/icon-3dcube-white.svg";
import iconStatusUp from "./assets/icon-status-up.svg";
import iconStatusUpWhite from "./assets/icon-status-up-white.svg";
import iconDriverRefresh from "./assets/icon-driver-refresh.svg";
import iconDriverRefreshWhite from "./assets/icon-driver-refresh-white.svg";
import iconHierarchySquare from "./assets/icon-hierarchy-square.svg";
import iconHierarchySquareWhite from "./assets/icon-hierarchy-square-white.svg";

import iconCpuCharge from "./assets/icon-cpu-charge.svg";

import imgShowcase1 from "./assets/image-showcase-1.png";
import imgShowcase2 from "./assets/image-showcase-2.png";
import imgShowcase3 from "./assets/image-showcase-3.png";
import imgShowcase4 from "./assets/image-showcase-4.png";

import iconScroll from "./assets/icon-scroll.svg";
import iconScrollWhite from "./assets/icon-scroll-white.svg";
import iconCpuChargeWhite from "./assets/icon-cpu-charge-white.svg";
import iconSecurityUser from "./assets/icon-security-user.svg";
import iconSecurityUserWhite from "./assets/icon-security-user-white.svg";
import iconCandle from "./assets/icon-candle.svg";
import iconCandleWhite from "./assets/icon-candle-white.svg";
import iconCrown from "./assets/icon-crown.svg";
import iconCrownWhite from "./assets/icon-crown-white.svg";
import HealthIcon from "./components/icon/HealthIcon";
import CpuChargeIcon from "./components/icon/CpuChargeIcon";
import CloudAddIcon from "./components/icon/CloudAddIcon";
import Brand1 from "./components/icon/Brand1";
import Brand3 from "./components/icon/Brand3";
import Brand2 from "./components/icon/Brand2";
import Brand4 from "./components/icon/Brand4";
import Brand5 from "./components/icon/Brand5";

export const DATA_BRANDS = [
  {
    id: 1,
    name: "Brand 1",
    imgURL: <Brand1 />,
  },
  {
    id: 2,
    name: "Brand 2",
    imgURL: <Brand2 />,
  },
  {
    id: 3,
    name: "Brand 3",
    imgURL: <Brand3 />,
  },
  {
    id: 4,
    name: "Brand 4",
    imgURL: <Brand4 />,
  },
  {
    id: 5,
    name: "Brand 5",
    imgURL: <Brand5 />,
  },
];

export const DATA_FEATURED = [
  {
    id: 1,
    icon: iconHierarchySquare,
    iconHover: iconHierarchySquareWhite,
    iconName: "Hierarchy Square",
    title: "Extra Layers",
    description: "Making your project more secure avoiding DDoS",
  },
  {
    id: 2,
    icon: icon3dCube,
    iconHover: icon3dCubeWhite,
    iconName: "3d Cube",
    title: "Customizable",
    description: "Only install what your business needs to grow",
  },
  {
    id: 3,
    icon: iconStatusUp,
    iconHover: iconStatusUpWhite,
    iconName: "Status Up",
    title: "AI Automation",
    description: "Decide the business flow based on latest reports",
  },
  {
    id: 4,
    icon: iconDriverRefresh,
    iconHover: iconDriverRefreshWhite,
    iconName: "Driver Refresh",
    title: "Auto-Scaling",
    description: "Have a long weekend without worrying any loss",
  },
];

export const DATA_OURECOSYSTEM = [
  {
    id: 1,
    icon: <HealthIcon />,
    title: "$880 Mio",
    description: "Company budget saved",
  },
  {
    id: 2,
    icon: <CpuChargeIcon />,
    title: "450,392",
    description: "All servers available",
  },
  {
    id: 3,
    icon: <CloudAddIcon />,
    title: "189 Mio",
    description: "Websites are running good",
  },
];

export const DATA_OURSHOWCASE = [
  {
    id: 1,
    imgURL: imgShowcase1,
    imgName: "Showcase 1",
  },
  {
    id: 2,
    imgURL: imgShowcase2,
    imgName: "Showcase 2",
  },
  {
    id: 3,
    imgURL: imgShowcase3,
    imgName: "Showcase 3",
  },
  {
    id: 4,
    imgURL: imgShowcase4,
    imgName: "Showcase 4",
  },
];

export const DATA_LEFT_FAQ = [
  {
    id: 1,
    question: "Why do we need to use Kapp?",
    answer:
      "Kubernetes, often referred to as 'Kapp', is a container orchestration platform that automates the deployment, scaling, and management of containerized applications. It streamlines operations, facilitates scaling, ensures application health, and provides a consistent environment across various stages of development, making it easier to manage complex systems efficiently.",
  },
  {
    id: 2,
    question: "Do we need to pay 6 months per item?",
    answer:
      "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments.",
  },
  {
    id: 3,
    question: "How to migrate from other service?",
    answer:
      "Migrating to Kubernetes involves steps like containerizing your app, selecting a migration strategy (rehost, refactor, rearchitect), setting up a Kubernetes cluster, defining deployment configurations, deploying your app to Kubernetes, and conducting thorough testing and monitoring post-migration.",
  },
];

export const DATA_RIGHT_FAQ = [
  {
    id: 1,
    question: "What if data doesn't get stored?",
    answer:
      "When data isn't stored, potential issues could include misconfigured storage settings, permission problems, network interruptions, code errors in data handling, or resource constraints. Checking these areas helps identify and resolve the problem.",
  },
  {
    id: 2,
    question: "Can we guarantee no any loss at all?",
    answer:
      "Ensuring absolutely no data loss is challenging. Implementing redundancy, backups, robust error handling, and resilient infrastructure significantly reduces the risk, but absolute guarantees are rare due to unforeseen circumstances or system failures.",
  },
];

export const DATA_GETSTARTED = [
  {
    id: 1,
    icon: iconScroll,
    iconHover: iconScrollWhite,
    iconName: "icon Scroll",
    title: "Web Crawl",
  },
  {
    id: 2,
    icon: iconCpuCharge,
    iconHover: iconCpuChargeWhite,
    iconName: "icon Cpu Charge",
    title: "Fast Report",
  },
  {
    id: 3,
    icon: iconSecurityUser,
    iconHover: iconSecurityUserWhite,
    iconName: "icon Security User",
    title: "Anti-DDoS",
  },
  {
    id: 4,
    icon: iconStatusUp,
    iconHover: iconStatusUpWhite,
    iconName: "icon Status Up",
    title: "Auto-Scaling",
  },
  {
    id: 5,
    icon: iconCandle,
    iconHover: iconCandleWhite,
    iconName: "icon Candle",
    title: "AI Perform",
  },
  {
    id: 6,
    icon: iconCrown,
    iconHover: iconCrownWhite,
    iconName: "icon Crown",
    title: "Top Plugins+",
  },
];

export const FOOTER_LINKS = [
  {
    id: 1,
    title: "Products",
    sublinks: [
      { id: 1, title: "Powerful Reports", url: "/" },
      { id: 2, title: "Blockchain", url: "/" },
      { id: 3, title: "Auto-Backup", url: "/" },
      { id: 4, title: "Data Science", url: "/" },
      { id: 5, title: "Auto-Scaling Up", url: "/" },
    ],
  },
  {
    id: 2,
    title: "Resources",
    sublinks: [
      { id: 1, title: "Support 24/7", url: "/" },
      { id: 2, title: "Help Center", url: "/" },
      { id: 3, title: "How-to Instructions", url: "/" },
      { id: 4, title: "Blog & Tips", url: "/" },
      { id: 5, title: "About Us", url: "/" },
    ],
  },
  {
    id: 3,
    title: "Company",
    sublinks: [
      { id: 1, title: "Privacy and Policy", url: "/" },
      { id: 2, title: "Terms and Conditions", url: "/" },
      { id: 3, title: "Investor Relations", url: "/" },
      { id: 4, title: "Join With Us", url: "/" },
      { id: 5, title: "Our Statistics", url: "/" },
    ],
  },
];
