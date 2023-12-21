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

import iconHealth from "./assets/icon-health.svg";
import iconCpuCharge from "./assets/icon-cpu-charge.svg";
import conCloudAdd from "./assets/icon-cloud-add.svg";

import imgShowcase1 from "./assets/image-showcase-1.png";
import imgShowcase2 from "./assets/image-showcase-2.png";
import imgShowcase3 from "./assets/image-showcase-3.png";
import imgShowcase4 from "./assets/image-showcase-4.png";

export const DATA_BRANDS = [
  {
    id: 1,
    name: "Brand 1",
    imgURL: imgBrand1,
    width: 141,
  },
  {
    id: 2,
    name: "Brand 2",
    imgURL: imgBrand2,
    width: 141,
  },
  {
    id: 3,
    name: "Brand 3",
    imgURL: imgBrand3,
    width: 141,
  },
  {
    id: 4,
    name: "Brand 4",
    imgURL: imgBrand4,
    width: 141,
  },
  {
    id: 5,
    name: "Brand 5",
    imgURL: imgBrand5,
    width: 141,
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
    icon: iconHealth,
    iconName: "Icon Health",
    title: "$880 Mio",
    description: "Company budget saved",
  },
  {
    id: 2,
    icon: iconCpuCharge,
    iconName: "Icon Cpu Charge",
    title: "450,392",
    description: "All servers available",
  },
  {
    id: 3,
    icon: conCloudAdd,
    iconName: "Icon Cloud Add",
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
