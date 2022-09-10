import styled from "styled-components";

export const BodySC = styled.div`
  & i {
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 5%;
    margin-left: 5%;
    width: 20px;
    height: 20px;
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 50%;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;

    @media (min-width: 746px) {
      display: none;
    }
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;

export const BodyComponent = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: #F4F5F7;

  overflow: hidden;
   padding: 4rem;
   & .contact{
    height: 80%;
    width: 100%;
    & h1 {
      font-size: 2.875rem;
      color: #073bac;
      background-color: #ffffff;
      border-radius: 25px;
      width: fit-content;
      font-family: "Catamaran", sans-serif;
    }
   }
   & .career-summary{
    height: 80%;
    width: 100%;
    
    & p{
      font-size: 1.25rem;
      font-family: "Comfortaa", cursive;
      line-height: 200%;
       & a{
        color: inherit;
        font-style: italic;
       }
    }
    & h1 {
      font-size: 2.875rem;
      color: #073bac;
      font-family: "Catamaran", sans-serif;
    }
    & .card{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      height:auto;
    @media (max-width:1380px){
      flex-wrap: wrap;
    }

      & .card-image{
        width: 15rem;
        height: auto;
       
        & img{
          width: 15rem;
          height: auto;
          padding:1rem;
        }
      }
      & p {
      font-size: 1.25rem;
      font-family: "Comfortaa", cursive;
      line-height: 200%;

    
      & a{
        color: inherit;
        font-style: italic;
      }
    }
    }
   }
  & .personal-summary{
    height: 80%;
    width: 100%;
    
    & h1 {
      font-size: 2.875rem;
      color: #073bac;
      font-family: "Catamaran", sans-serif;
    }
    & .card{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      height:auto;
    @media (max-width:746px){
      flex-wrap: wrap;
    }

      & .card-image{
        width: 15rem;
        height: auto;
       
        & img{
          width: 15rem;
          height: auto;
          padding:1rem;
        }
      }
      & p {
      font-size: 1.25rem;
      font-family: "Comfortaa", cursive;
      line-height: 200%;

    
      & a{
        color: inherit;
        font-style: italic;
      }
    }
    }
    
  }

  & .welcome-card {
    //border: 1px solid black;
    height: 100vh;
    width: 70%;
   
    & h1 {
      font-size: 46px;
      color: #073bac;
      font-family: "Catamaran", sans-serif;
    }
    & p {
      font-size: 20px;
      font-family: "Comfortaa", cursive;
      line-height: 200%;
      & a{
        color: inherit;
      }
    }
  }
`;
export const SideBar = styled.div`
  
  width: 280px;
    min-height: 100vh;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 16%);
    background-color: #fff;
    position: fixed;
    top: 0;
    left: -100%;
    z-index: 1;
    transition: 0.5s;
  
  
`;

export default BodySC;
