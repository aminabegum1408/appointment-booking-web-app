//import React from "react";

import React, { Component, useState } from "react";

/// React router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";

/// Layout
import Nav from "./layouts/nav";

/// Pages
import Registration from "./pages/Registration";
import Login from "./pages/Login";


/// Deshboard
import ManageSlot from "./components/ManageSlot";
import ManageAppointment from "./components/ManageAppointment";

const Markup = () => {
  let path: any = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  // let pagePath = path.split("-").includes("page");
  let pagePath = path != "" ? true : false;

  const [activeEvent, setActiveEvent] = useState(!path);
  const [isPath, setIsPath] = useState(pagePath);

  const routes: any[] = [
    /// Deshborad
    { url: "", component: Login },
    { url: "manage-appointment", component: ManageAppointment },
    { url: "manage-slot", component: ManageSlot },
   
  ];
  console.log("page path is===>", pagePath);
  return (
    <Router basename="">
      <div
        id={`${!pagePath ? "main-wrapper" : ""}`}
        className={`${!pagePath ? "show" : "mh100vh"}`}
      >
        {pagePath && (
          <Nav
            onClick={() => setActiveEvent(!activeEvent)}
            activeEvent={activeEvent}
            onClick2={() => setActiveEvent(false)}
            onClick3={() => setActiveEvent(true)}
          />
        )}

        <div
          className={` ${!path && activeEvent ? "rightside-event" : ""} ${
            pagePath ? "content-body" : ""
          }`}
        >
          <div className={`${pagePath ? "container-fluid" : ""}`}>
            <Switch>
              {routes.map((data, i) =>
                data.url !== "" ? (
                  <Route
                    key={i}
                    exact
                    path={`/${data.url}`}
                    component={data.component}
                  />
                ) : null
              )}
            </Switch>
          </div>
        </div>
        {/* {!pagePath && <Footer />} */}
      </div>
      {window.location.pathname === "" || window.location.pathname === "/" ? (
        <Route path={routes[0].url} component={routes[0].component} exact />
      ) : null}
    </Router>
  );
};

export default Markup;
