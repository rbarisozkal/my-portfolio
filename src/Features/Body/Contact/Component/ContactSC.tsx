import styled from 'styled-components';
export const ContactSC = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  border: none;
  border-radius: 25px;

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40rem;
    justify-content: space-evenly;
    align-items: flex-start;
    & .error-text{
      display: block;
      color: red;
      width: 100%;
      height: auto;
    }
    & p{
      font-size: 1rem;
    }
    & .valid-text{
      display: none;
    }
    & input {
      width: 100%;
      height: 3rem;
      font-size: 1.2rem;
      margin: 0.5rem 0 0.5rem 0;
      padding: 0;
      
      border: 1px solid lightgrey;
      &:focus{
        outline: none;
      }
    }
    & textarea {
      resize: none;
      border: 1px solid lightgrey;
      width: 100%;
      height: 10rem;
      margin: 0.5rem 0 0.5rem 0;
      font-size: 1.2rem;
      outline: none;
      padding-bottom: 1rem;
      padding-top: 1rem;
    }
    & button {
      width: 18%;
      background-color: gray;
      color: #ffffff;
      align-self: flex-end;
      height: 3rem;
      font-size: 1.1rem;
      border: 1px solid transparent;
      border-radius: 25px;
      margin-right: -2px;
      cursor: pointer;
    }
  }
`;
export default ContactSC;
