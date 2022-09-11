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
  background-color: #f4f5f7;

  overflow: hidden;
  padding: 4rem;
  @media (max-width: 460px) {
    padding: 2rem;
  }
  & .welcome{
    @media (max-width:765px){
      padding: 2rem;
    }
  }
  & .contact {
    height: 80%;
    width: 100%;
    padding: 4rem;
    & h1 {
      font-size: 2.875rem;
      color: #ffffff;

      border-radius: 25px;
      width: fit-content;
      font-family: "Catamaran", sans-serif;
    }
  }
  & .career-summary {
    height: 80%;
    width: 100%;

    & p {
      font-size: 1.25rem;
      font-family: "Comfortaa", cursive;
      line-height: 200%;
      & a {
        color: inherit;
        font-style: italic;
      }
    }
    & h1 {
      font-size: 2.875rem;
      color: #073bac;
      font-family: "Catamaran", sans-serif;
    }
    & .card {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      height: auto;
      @media (max-width: 1380px) {
        flex-wrap: wrap;
      }

      & .card-image {
        display: flex;
        flex-direction: column;
        width: auto;
        height: auto;

        & img {
          width: 30rem;
          height: auto;
          padding: 1rem;
          @media (max-width: 640px) {
            width: 20rem;
          }
        }
      }
      & p {
        font-size: 1.25rem;
        font-family: "Comfortaa", cursive;
        line-height: 200%;

        & a {
          color: inherit;
          font-style: italic;
        }
      }
    }
  }
  & .personal-summary {
    height: 80%;
    width: 100%;

    & h1 {
      font-size: 2.875rem;
      color: #073bac;
      font-family: "Catamaran", sans-serif;
    }
    & .card {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      height: auto;
      @media (max-width: 746px) {
        flex-wrap: wrap;
      }

      & .card-image {
        width: auto;
        height: auto;
      }

      & img {
        width: 15rem;
        height: auto;
        padding: 1rem;
      }
    }
    & p {
      font-size: 1.25rem;
      font-family: "Comfortaa", cursive;
      line-height: 200%;

      & a {
        color: inherit;
        font-style: italic;
      }
    }
  }

  & .welcome-card {
    //border: 1px solid black;
    height: 100vh;
    width: 70%;
    @media (max-width: 746px) {
      width: 100%;
      }
    display: flex;
    flex-direction: column;
    & h1 {
      font-size: 2.875rem;
      color: #073bac;
      font-family: "Catamaran", sans-serif;
    }
    & p {
      font-size: 1.25rem;
      font-family: "Comfortaa", cursive;
      line-height: 200%;
      & a {
        color: inherit;
      }
    }
    & .gif {
      align-self: center;
      max-width: 32rem;
    }
  }
`;

export default BodySC;
