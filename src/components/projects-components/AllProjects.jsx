import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import astro from "../../assets/astro.svg";
import typescript from "../../assets/typescript.svg";
import javascript from "../../assets/javascript.svg";
import vue from "../../assets/vue.svg";
import css from "../../assets/css.svg";
import swift from "../../assets/swift.svg";
import java from "../../assets/java.svg";
import python from "../../assets/python.svg";
import boschSVG from "../../assets/boschSVG.svg";
import huaweiSvg from "../../assets/huaweiSVG.svg";
import React from "react";
import axios from "axios";
import { motion } from "framer-motion";

function AllProjects() {
  const companyProjects = [
    {
      name: "AMR Management",
      id: 1,
      description:
        "AMR Management is a web application developed using Angular, Rxjs, ChartJs, OpenStreetMap and Angular Material. It is a management dashboard for AMR's in each branch of Bosch. It contains comparison of AMR's, their locations, their status and their history and performance by time.",
      language: "TypeScript",
      logo: boschSVG.src,
      project: "company",
      company: "Bosch",
    },
    {
      name: "Operator Dashboard",
      id: 2,
      description:
        "Operator Dashboard is a web application developed using Angular, Rxjs and Angular Material. It is a dashboard for analyzing the operator's status at the department BMG (Bosch Manufacturing Solutions).",
      language: "TypeScript",
      logo: boschSVG.src,
      project: "company",
      company: "Bosch",
    },
    {
      name: "Test Equipment Reservation",
      id: 3,
      description:
        "Test Equipment Reservation is a web application developed using Angular, Rxjs, Angular Material and .NetCore. It is a dashboard for reserving test equipment for the department BMG (Bosch Manufacturing Solutions).",
      language: "TypeScript",
      logo: boschSVG.src,
      project: "company",
      company: "Bosch",
    },
    {
      name: "Movie Ticketing System",
      id: 4,
      description:
        "Movie Ticketing System is a web application developed using Vue, JavaScript, TypeScript and Vuetify. It is an application for reserving movie tickets for the cinema company located at Myanmar",
      language: "Vue",
      logo: huaweiSvg.src,
      project: "company",
      company: "Huawei",
    },
    {
      name: "Huawei Cloud Lottery",
      id: 5,
      description:
        "This is an app for advertising Huawei Cloud products. It promotes Huawei Cloud products by giving away prizes to the users. It is developed using Vue, JavaScript, TypeScript and Vuetify.",
      language: "Vue",
      logo: huaweiSvg.src,
      project: "company",
      company: "Huawei",
    },
  ];
  const projectsMotion = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  const itemMotion = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const [projects, setProjects] = useState([]);
  const companyProject = {
    Bosch: boschSVG.src,
    Huawei: huaweiSvg.src,
  };
  const [loading, setLoading] = useState(true);
  const getLanguageIcon = {
    TypeScript: typescript.src,
    JavaScript: javascript.src,
    Vue: vue.src,
    CSS: css.src,
    Swift: swift.src,
    Astro: astro.src,
    Java: java.src,
    Python: python.src,
  };

  useEffect(() => {
    async function getProjects() {
      await axios
        .get(
          "https://api.github.com/users/rbarisozkal/repos?username=rbarisozkal"
        )
        .then((response) => {
          response.data.sort(function (a, b) {
            return new Date(b.created_at) - new Date(a.created_at);
          });
          response.data.unshift(...companyProjects);
          setProjects(response.data);
          console.log(response.data);
        });
    }
    getProjects();
  }, []);
  return (
    <motion.div
      variants={projectsMotion}
      animate="visible"
      initial="hidden"
      className="container flex flex-col mt-8 flex flex-wrap justify-center items-center"
    >
      {projects.map((repo) => (
        <motion.div
          variants={itemMotion}
          className="bg-white rounded-lg shadow-lg overflow-hidden project-card m-4 max-w-4xl min-[320px]:p-4"
          key={repo.id}
        >
          {" "}
          {repo.project === "company" ? (
            <img
              className="w-48 p-4"
              src={companyProject[repo.company]}
              alt=""
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-12 w-12 m-2 fill-current text-gray-600"
            >
              <path
                filRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.486 0-.24-.009-.875-.013-1.713-2.782.603-3.369-1.338-3.369-1.338-.454-1.154-1.11-1.462-1.11-1.462-.905-.619.068-.607.068-.607 1.003.07 1.532 1.03 1.532 1.03.89 1.527 2.337 1.086 2.904.831.09-.645.35-1.086.638-1.336-2.23-.255-4.576-1.116-4.576-4.962 0-1.097.393-1.995 1.04-2.696-.105-.255-.452-1.278.099-2.665 0 0 .846-.271 2.769 1.03A9.67 9.67 0 0112 5.85c.825.005 1.657.111 2.447.328 1.923-1.3 2.768-1.03 2.768-1.03.552 1.387.206 2.41.101 2.665.647.701 1.038 1.599 1.038 2.696 0 3.858-2.35 4.704-4.592 4.954.36.312.682.924.682 1.862 0 1.345-.012 2.425-.012 2.75 0 .27.18.584.688.485C19.138 20.16 22 16.415 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
          )}
          <div className="p-4">
            <h2 className="font-semibold text-lg">{repo.name}</h2>
            <p className="text-gray-600">{repo.full_name}</p>
            <p className="text-gray-700 mt-2">
              {repo.description || "No description available"}
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="w-20 text-white py-1 rounded-full text-xs">
                <a href={repo.html_url}>
                  {" "}
                  <img src={getLanguageIcon[repo.language]} alt="" />
                </a>
              </span>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-blue-600 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
          <style>
            {`
          .project-card {
            min-width: 320px; /* Set the desired width for the project cards */
            width: 100%; /* Ensure the card takes full width of the container */
          }
        `}
          </style>
        </motion.div>
      ))}
    </motion.div>
  );
}
export default AllProjects;
