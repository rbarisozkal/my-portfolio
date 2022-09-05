import React, { useState } from "react";
import { BodyComponent, BodySC } from "./BodySC";
import { Repositories } from "../Repositories";
import welcome from "../../../assets/Backgrounds/welcome.png";
import personalSummary from "../../../assets/Backgrounds/personalSummary.png";
import webdev from '../../../assets/Backgrounds/webdev.png';
import "./SideBar.css"

const Body = () => {
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
      <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
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
        className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
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
      <BodyComponent style={{ backgroundImage: `url(${welcome})` }}>
      <div className="welcome-card">
      
          <h1>Personal Summary</h1>
          <p>
            Hello again, I'm Renas Baris Ozkal. Currently 3rd year student of Computer Engineering at TED University
            I love reading world classics novels, playing the guitar and learning new languages. I like to add something to myself, I am someone who tries to overcome obstacles without giving up.
            
          </p>
        </div>
      </BodyComponent>
      <Repositories/>
      <BodyComponent style={{ backgroundImage: `url(${webdev})` }} >
      
      </BodyComponent>

    </BodySC>
  );
};
export default Body;
