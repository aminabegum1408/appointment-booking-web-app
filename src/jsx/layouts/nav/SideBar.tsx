import React, { Component, ElementType } from "react";
import { Link, useHistory } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import MetisMenu from "metismenujs";
import { FaBusinessTime, FaRegCalendarCheck } from "react-icons/fa";

interface SideBarInterface {
  onClick(): void;
  onClick3(): void;
}
import { IMMOptions } from "metismenujs/dist/types/interface";
import axios from "axios";
import { notifySuccess, notifyFail } from "../../../utils/tostifyToastr";

interface IMetisMenuOptions extends IMMOptions {
  className?: string;
  id?: string;
}

class MM extends Component<IMetisMenuOptions, {}> {
  protected mm!: MetisMenu;
  protected el!: string | Element;

  componentDidMount() {
    this.mm = new MetisMenu(this.el, this.props);
  }

  componentWillUnmount() {
    this.mm.dispose();
  }
  render() {
    const { subMenu, children, className, id } = this.props;
    const MMTag = subMenu || ("ul" as ElementType);
    return (
      <div className="mm-wrapper">
        <MMTag
          className={`metismenu ${className}`}
          ref={(el: string | Element) => (this.el = el)}
        >
          {children}
        </MMTag>
      </div>
    );
  }
}

class SideBar extends Component<SideBarInterface, any> {
  constructor(props: any) {
    super(props);
  }
  state = {
    show: false,
    activeTab: "",
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  handleLogout = () => {
    sessionStorage.removeItem("token");
    if (sessionStorage.getItem("token") == "")
      notifySuccess("Logout Successful");

    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };

  /// Open menu
  componentDidMount() {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");

    function toggleFunc() {
      return aaa!.classList.toggle("menu-toggle");
    }

    btn!.addEventListener("click", toggleFunc);

    let path: any = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    this.setState({ activeTab: path });
  }
  render() {
    /// Path
    let path: any = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];

    return (
      <div className="dlabnav" style={{ paddingTop: "100px" }}>
        <PerfectScrollbar className="dlabnav-scroll mt-0">
          <MM className="metismenu pt-sm-4" id="menu">
            <li
              className={`${
                this.state.activeTab === "manage-slot" ? "mm-active" : ""
              }`}
            >
              <Link
                className=" ai-icon"
                to="manage-slot"
                onClick={() => {
                  this.setState({ activeTab: "manage-slot" });
                }}
              >
                <FaBusinessTime color="#ED655E" />
                <span className="nav-text">Manage Slot</span>
              </Link>
            </li>
            <li
              className={`${
                this.state.activeTab === "manage-appointment" ? "mm-active" : ""
              }`}
            >
              <Link
                className=" ai-icon "
                to="manage-appointment"
                onClick={() => {
                  this.setState({ activeTab: "manage-appointment" });
                }}
              >
                <FaRegCalendarCheck color="#ED655E" />
                <span className="nav-text">Manage Appointment</span>
              </Link>
            </li>
          </MM>
          <MM className="metismenu mt-md-0 mt-5" id="menu">
            <li className="nav-item dropdown pt-5 px-md-0 px-3 mt-5">
              <a
                href="/"
                className="nav-link border-end mt-5"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                <div className="d-flex align-items-center mt-5">
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    height="30"
                    width="25"
                    className="rounded-lg"
                    alt=""
                  />
                  <i className="las la-caret-right"></i>
                </div>
              </a>
              <ul
                className="dropdown-menu bg-opacity-25 mb-0"
                aria-labelledby="navbarDropdown"
                style={{ background: "#ED655E" }}
              >
                <li>
                  <a
                    className="dropdown-item  text-white "
                    style={{ cursor: "pointer", background: "#ED655E" }}
                    onClick={this.handleLogout}
                  >
                    <i className="las la-power-off"></i>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </MM>
        </PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
