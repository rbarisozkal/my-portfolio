import React from "react";
import { BodyComponent, BodySC } from "./BodySC";
import welcome from "../../../assets/welcome.png";
import personalSummary from "../../../assets/personalSummary.png";


const Body = () => {
  return (
    <BodySC>
      <i id="list-icon" className="fa-solid fa-bars"></i>
      <BodyComponent
        className="welcome"
        style={{ backgroundImage: `url(${personalSummary})` }}
      >
        <div className="welcome-card">
          <h1>WELCOME TO MY PAGE</h1>
          <p>
            This is Renas Barış Özkal. In this page you can find my personal summary, projects that I have made and contributed,
            my education history and my experience.
          </p>
        </div>
      </BodyComponent>
      <BodyComponent style={{ backgroundImage: `url(${welcome})` }} />
      <BodyComponent style={{ backgroundImage: `url(${welcome})` }} />
    </BodySC>
  );
};
export default Body;
