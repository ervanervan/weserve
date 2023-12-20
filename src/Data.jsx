import imgBrand1 from "./assets/brand-1.svg";
import imgBrand2 from "./assets/brand-2.svg";
import imgBrand3 from "./assets/brand-3.svg";
import imgBrand4 from "./assets/brand-4.svg";
import imgBrand5 from "./assets/brand-5.svg";

import iconHierarchySquare from "./assets/icon-hierarchy-square.svg";
import icon3dCube from "./assets/icon-3dcube.svg";
import iconStatusUp from "./assets/icon-status-up.svg";
import iconDriverRefresh from "./assets/icon-driver-refresh.svg";

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
    iconHover: icon3dCube,
    iconName: "Hierarchy Square",
    title: "Extra Layers",
    description: "Making your project more secure avoiding DDoS",
  },
  {
    id: 2,
    icon: icon3dCube,
    iconHover: iconStatusUp,
    iconName: "3d Cube",
    title: "Customizable",
    description: "Only install what your business needs to grow",
  },
  {
    id: 3,
    icon: iconStatusUp,
    iconHover: iconHierarchySquare,
    iconName: "Status Up",
    title: "Extra Layers",
    description: "Decide the business flow based on latest reports",
  },
  {
    id: 4,
    icon: iconDriverRefresh,
    iconHover: iconStatusUp,
    iconName: "Driver Refresh",
    title: "Extra Layers",
    description: "Have a long weekend without worrying any loss",
  },
];
