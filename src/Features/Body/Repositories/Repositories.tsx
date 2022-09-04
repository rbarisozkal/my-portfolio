import React, { useEffect, useRef } from "react";
import { Octokit } from "@octokit/core";
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
    console.log(repoList);
  
  return (
    <div>
      <ul>
      {repoList.map(el =>{
        return (
            <li key={el}>
                {JSON.stringify(el)}
            </li>
        )
      })}
      </ul>
    </div>
  );
};
export default Repositories;
