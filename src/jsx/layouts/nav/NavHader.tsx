import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const NavHader = () => {
   const [toggle, setToggle] = useState(false);

   return (
      <div className="nav-header px-md-0 px-4">
         <Link to="#" className="brand-logo justify-content-md-center justify-content-start border-0">
             <img className="logo-abbr" src={logo} alt="" />
         </Link>

         <div className="nav-control" onClick={() => setToggle(!toggle)}>
            <div className={`hamburger ${toggle ? "is-active" : ""}`}>
               <span className="line"></span>
               <span className="line"></span>
               <span className="line"></span>
            </div>
         </div>
      </div>
   );
};

export default NavHader;
