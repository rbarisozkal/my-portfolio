import styled from "styled-components";
export const RepositoriesSC = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  & ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 100%;
    height: auto;
    flex-wrap: wrap;
    & .post {
        background-color: #ffffff;
        border-radius: 4px;
        height: auto;
        padding: 1rem;
      & li {
        list-style: none;
        min-width: 100%;
        height: auto;
      }
    }
  }
`;
export default RepositoriesSC;
