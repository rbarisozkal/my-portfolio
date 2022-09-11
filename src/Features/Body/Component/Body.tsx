import React, { useState } from "react";
import { BodyComponent, BodySC } from "./BodySC";
import { Repositories } from "../Repositories";
import personalSummary from "../../../assets/Backgrounds/personalSummary.png";
import me from "../../../assets/portfolio-photos/me.jpeg";
import github from "../../../assets/portfolio-photos/github.jpg";
import purpleBackground from "../../../assets/Backgrounds/purpleBackground.png";
import pdf from "../../../../src/resume.pdf";
import { Contact } from "../Contact";
import office from "../../../assets/office.gif";
import "./SideBar.css";
import {Link} from 'react-scroll'
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
          <h4 className="mb-0">My Portfolio</h4>
        </div>
        <div className="sd-body">
          <ul>
          <Link className='link' activeClass="active" smooth spy to="welcome" >
            Welcome to My Page
          </Link>
          <Link className='link' activeClass="active" smooth spy to="about" >
            About Me
          </Link>
          <Link className='link' activeClass="active" smooth spy to="repos">
            My Projects
          </Link>
          <Link className='link' activeClass="active" smooth spy to="contact" >
            Contact
          </Link>
          </ul>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>

      <BodyComponent
      id="welcome"
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
          <p>
            {" "}
            Moreover, you will find detailed information of repositories' of
            projects, my long-term and short term future plans
          </p>
          <br />
          <br />
          <div
            className="gif"
            style={{
              pointerEvents: "none",
              width: "100%",
              height: "0",
              paddingBottom: "49%",
              position: "relative",
            }}
          >
            <iframe
              src="https://giphy.com/embed/AYECTMLNS4o67dCoeY"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
          <p>
            You can find my contact information and detailed summary at the very
            bottom of the page.
          </p>
        </div>
      </BodyComponent>
      <BodyComponent id="about">
        <div className="personal-summary">
          <h1>Personal Summary</h1>
          <div className="card">
            <p>
              Hello again, I'm Renas Baris Ozkal. Currently 3rd year student of
              Computer Engineering at TED University I love reading world
              classics novels, playing the guitar and learning new languages. I
              like to add something to myself, I am someone who tries to
              overcome obstacles without giving up.
              <br />
              I love reading books, especially World Classics. My favorite
              writer is Albert Camus and favorite book is Notes from Underground
              by Fyodor Dostoyevsky. I love hanging out with my friends and
              going movies together. I also love going movies alone at
              midnights. I love watching Cristopher Nolan's movies.
              <br />
              <br />
              <br />
            </p>
            <div className="card-image">
              <img src={me} alt="" />
            </div>
          </div>
          <br />
        </div>
      </BodyComponent>
      <BodyComponent>
        <div className="career-summary">
          <h1>Career Summary</h1>

          <div className="card">
            <p>
              I have started my education at TED University Computer Engineering
              department at September 2019 and my expected graduation is at
              December 2023. As for education, I took classes such as
              "Fundamentals of Programming with Java", "Software Engineering",
              "Data Structure and Algorithms I-II", "Concepts of Programming"
              and "C Programming" at my university. Previously I have worked
              well-known companies such as Jotform and B/S/H/ Hausgeräte GmbH. I
              also worked as Java Lab Assistant at my university. For this
              position I helped students in their lab works, tried to explain
              fundamentals of programming and algorithms.
              <br />
              <br />
              Also I was the WebDev-Cloud Core Team member of Google Developer
              Student Clubs TEDU society at my university. I gave Introduction
              to Git and Git-Hands on Labs courses. First part of the course,
              which is Introduction to Git held online via Youtube and its
              language is Turkish. You can find link{" "}
              <a href="https://www.youtube.com/watch?v=6A4dPWhVScI">
                {" "}
                here.
              </a>{" "}
              On the other hand, second part held face-to-face at lab class at
              university.
              <br />
              <br />
              For a couple of weeks I have been learning DevOps and Cloud. As
              for long term I am planning be a DevOps-Cloud Developer and want
              to work in big tech Companies such as Meta, Facebook and Amazon.
            </p>

            <div className="card-image">
              <img src={github} alt="" />

              <img src={office} alt=""></img>
            </div>
          </div>

          <br />
          <br />

          <p>
            Currently I'm working as Software Engineering Intern at Huawei. You
            can download my resume by clicking{" "}
            <a download href={pdf} target="_blank">
              here
            </a>{" "}
          </p>
        </div>
      </BodyComponent>
      <Repositories />
      <BodyComponent id='contact' style={{ backgroundImage: `url(${purpleBackground})` }}>
        <div className="contact">
          <h1>Contact</h1>
          <Contact />
        </div>
      </BodyComponent>
    </BodySC>
  );
};
export default Body;
