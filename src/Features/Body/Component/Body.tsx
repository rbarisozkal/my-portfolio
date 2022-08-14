import React, { useState } from "react";
import { BodyComponent, BodySC, SideBar } from "./BodySC";
import welcome from "../../../assets/welcome.png";
import personalSummary from "../../../assets/personalSummary.png";
import "./SideBar.css"

const Body = () => {
  let openSideBar = false;
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <BodySC>
      <i
        onClick={ToggleSidebar}
        id="list-icon"
        className="fa-solid fa-bars"
      ></i>
      <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
        <div className="sd-header">
          <h4 className="mb-0">Sidebar Header</h4>    
        </div>
        <div className="sd-body">
          <ul>
            <li>
              <a className="sd-link">Welcome to My Page</a>
            </li>
            <li>
              <a className="sd-link">About Me</a>
            </li>
            <li>
              <a className="sd-link">My Projects</a>
            </li>
            <li>
              <a className="sd-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>

      <BodyComponent
        className="welcome"
        style={{ backgroundImage: `url(${personalSummary})` }}
      >
        <div className="welcome-card">
          <h1>WELCOME TO MY PAGE</h1>
          <p>
            This is Renas Barış Özkal. In this page you can find my personal
            summary, projects that I have made and contributed, my education
            history and my experience.
          </p>
        </div>
      </BodyComponent>
      <BodyComponent style={{ backgroundImage: `url(${welcome})` }} />
      <BodyComponent style={{ backgroundImage: `url(${welcome})` }} />
    </BodySC>
  );
};
export default Body;
