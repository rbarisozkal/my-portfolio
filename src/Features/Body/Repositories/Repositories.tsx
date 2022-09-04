import React, { useCallback, useEffect, useRef,useState } from "react";
import { Octokit } from "@octokit/core";
import { MutableRefObject } from "react";
const Repositories = () => {

  const octokit = new Octokit({
    auth: "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",
  });

  const [response,setResponse] = useState(null);

  
  useEffect(() => {
        
       const getRepos = async  () => {
        const res = await octokit.request("GET /users/rbarisozkal/repos",{username: "rbarisozkal",})
       setResponse(res.data)
       }
       getRepos();
    
  },[]);
  console.log(response);
  return (
    <div></div>
  )
};
export default Repositories
