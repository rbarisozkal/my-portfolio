import styled from "styled-components";
export const RepositoriesSC = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4rem;
  @media (max-width: 460px) {
    padding: 2rem;
  }
  & .posts-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-width: 100%;
    height: auto;
    flex-wrap: wrap;
    padding-left: 0;
    & .post {
      background-color: #ffffff;
      border-radius: 4px;
      border-bottom: 1px solid grey;
      height: auto;
      width: 100%;

      margin-bottom: 2rem;
      padding: 1rem;
      padding-right: 0;
      padding-left: 0;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      &:last-child {
        border: none;
      }

      & li {
        list-style: none;
        min-width: 100%;
        height: auto;
        padding-left: 1rem;

        & h2 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          & span {
            & a {
              text-decoration: none;
              color: inherit;
              & img {
                width: 25px;
                height: 25px;
                @media (min-width: 320px) and (max-width: 420px) {
                width: 0.8rem;
              }
              }
              
            }
          }
          @media (max-width: 460px) {
            font-size: 1.2rem;
            flex-direction: column;
            flex-wrap: w;
          }
          @media (min-width: 320px) and (max-width: 420px) {
            font-size: 1rem;
          }
        }
        & section {
          & p {
            padding-right: 1rem;
            font-size: 0.8rem;
            @media (min-width: 320px) and (max-width: 420px) {
              font-size: 0.7rem;
            }
          }
        }
        & h3 {
          padding-right: 1rem;
          @media (max-width: 460px) {
            font-size: 0.8rem;
          }
          @media (min-width: 320px) and (max-width: 420px) {
            font-size: 0.9rem;
          }
        }
        & .repo-name {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          & span {
            padding-right: 2rem;
          }
        }
      }
    }
  }
`;
export default RepositoriesSC;
