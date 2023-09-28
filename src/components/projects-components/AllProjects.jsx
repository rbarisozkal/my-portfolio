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
import React from "react";
import axios from "axios";
const octokit = new Octokit({
  auth: "",
});
function AllProjects() {
  const [projects, setProjects] = useState([]);
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
  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;
  useEffect(async () => {
    console.log(process.env);
    await octokit
      .request("GET /users/rbarisozkal/repos", {
        username: "rbarisozkal",
        headers: {},
      })
      .then((response) => {
        //sort data by date
        response.data.sort(function (a, b) {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        setProjects(response.data);
        console.log(response.data);
      });
  }, []);
  return (
    <div className="container flex flex-col mx-auto mt-8 flex flex-wrap justify-center items-center">
      {projects.map((repo) => (
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden m-4 max-w-4xl w-full"
          key={repo.id}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-12 w-12 m-2 fill-current text-gray-600"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.486 0-.24-.009-.875-.013-1.713-2.782.603-3.369-1.338-3.369-1.338-.454-1.154-1.11-1.462-1.11-1.462-.905-.619.068-.607.068-.607 1.003.07 1.532 1.03 1.532 1.03.89 1.527 2.337 1.086 2.904.831.09-.645.35-1.086.638-1.336-2.23-.255-4.576-1.116-4.576-4.962 0-1.097.393-1.995 1.04-2.696-.105-.255-.452-1.278.099-2.665 0 0 .846-.271 2.769 1.03A9.67 9.67 0 0112 5.85c.825.005 1.657.111 2.447.328 1.923-1.3 2.768-1.03 2.768-1.03.552 1.387.206 2.41.101 2.665.647.701 1.038 1.599 1.038 2.696 0 3.858-2.35 4.704-4.592 4.954.36.312.682.924.682 1.862 0 1.345-.012 2.425-.012 2.75 0 .27.18.584.688.485C19.138 20.16 22 16.415 22 12c0-5.523-4.477-10-10-10z"
            />
          </svg>
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
        </div>
      ))}
    </div>
  );
}
export default AllProjects;
