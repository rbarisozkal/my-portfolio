import styled from "styled-components";

export const BodySC = styled.div`
    height:auto ;
    top: 0;
`;

export const BodyComponent = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-color: #464646;
    height:100vh;
    overflow: hidden;
    margin-top: 0px;

    & .welcome-card{
      //border: 1px solid black;
      height: 65%;
      width: 50%;
      margin-left: 10%;
      & h1{
        font-size: 46px;
        color: #073bac;
        font-family: 'Catamaran', sans-serif;
      }
      & p{
        font-size: 20px;
        font-family: 'Comfortaa', cursive;
        line-height:200%;
      }
    }
`;
export default BodySC;
