import React, { Fragment, useState } from "react";
import SideBar from "./SideBar";
import NavHader from "./NavHader";
interface navInterface {
   title?: any;
   onClick(): void;
   onClick2(): void;
   onClick3(): void;
   activeEvent?: any;
}
const KokiNav = (props: navInterface) => {
   const [toggle, setToggle] = useState("");
   const onClicks = (name: React.SetStateAction<string>) => setToggle(toggle === name ? "" : name);
   return (
      <Fragment>
         <NavHader />
         <SideBar onClick={() => props.onClick2()} onClick3={() => props.onClick3()} />
      </Fragment>
   );
};

export default KokiNav;
