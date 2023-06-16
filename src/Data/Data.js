import { AiOutlineHome } from "react-icons/ai";
import { SiSimpleanalytics } from "react-icons/si";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

 const SidebarData = [
  {
    icon: AiOutlineHome,
    heading: "Dashboard",
  },
  {
    icon: GiNotebook,
    heading: "Orders",
  },
  {
    icon: BsFillPeopleFill,
    heading: "Customers",
  },
  {
    icon: MdOutlineProductionQuantityLimits,
    heading: "Product",
  },
  {
    icon: SiSimpleanalytics,
    heading: "Analytics",
  },
];

const Carddata = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25, 970",
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Reveneu",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FC929D",
    },
    barValue: 80,
    value: "14, 270",
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(180deg, #C4DFDF 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #C4DFDF",
    },
    barValue: 60,
    value: "4, 270",
    series: [
      {
        name: "Expenses",
        data: [10, 25, 60, 80, 60, 20, 60],
      },
    ],
  },
];
export {SidebarData,Carddata} 