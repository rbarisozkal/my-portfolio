import React, { useEffect, useRef } from "react";
import { Octokit } from "@octokit/core";
import RepositoriesSC from "./RepositoriesSC";
const Repositories = () => {
  const octokit = new Octokit({
    auth: "{TOKEN HERE}",
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
  repoList.map((e) => {
    elem.push(e);
  });
  let listElements = elem.map((e) => {
    return (
      <div className="post">
        <li>
          <h3>{e.name}</h3>
          <h5>{e.description}</h5>
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
