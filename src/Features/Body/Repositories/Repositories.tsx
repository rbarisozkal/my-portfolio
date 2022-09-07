import React, { useEffect } from "react";
import { Octokit } from "@octokit/core";
import RepositoriesSC from "./RepositoriesSC";

import github from '../../../assets/Svg/github.svg'
const Repositories = () => {
  const octokit = new Octokit({
    auth: "TOKEN HERE",
  });

  async function getRepos() {
    const res = await octokit.request("GET /users/rbarisozkal/repos", {
      username: "rbarisozkal",
    });
    return res.data;
  }
  const repos = getRepos().then((res) => {
    return res;
  });
  const [repoList, setRepoList] = React.useState([]);
  useEffect(() => {
    repos.then((res) => {
      setRepoList(res);
    });
  }, []);
  let elem: Array<any> = [];
  console.log(repoList);
  repoList.map((e) => {
    elem.push(e);
  });
  let listElements = elem.map((e) => {
    return (
      <div className="post">
        <li key={e.id}>
          <h2 className="repo-name">
            <span>{e.name}</span> <span><a target="_blank" href={e.html_url}> <img src={github} alt="" /> </a></span> 
          </h2>
          <h3>{e.description}</h3>
          <p>Mostly used language by percentage: {e.language}</p>
        </li>
      </div>
    );
  });
  console.log(listElements);

  return (
    <RepositoriesSC>
      <ul className="posts-container">{listElements}</ul>
    </RepositoriesSC>
  );
};
export default Repositories;
