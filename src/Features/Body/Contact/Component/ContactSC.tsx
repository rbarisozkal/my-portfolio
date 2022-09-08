import styled from 'styled-components';
export const ContactSC = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  width: 85%;
  background: #ffffff;
  border: none;
  border-radius: 25px;

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20rem;
    justify-content: space-evenly;
    align-items: flex-start;
    & input {
      width: 100%;
      height: 2rem;
      margin: 0.5rem 0 0.5rem 0;
      padding: 0;
      line-height: 95%;
      border: 1px solid lightgrey;
    }
    & textarea {
      resize: none;
      border: 1px solid lightgrey;
      width: 100%;
      height: 8rem;
      outline: none;
      padding: 0;
    }
    & input[type='submit'] {
      width: 20%;
      align-self: flex-end;

      border: 1px solid transparent;
      border-radius: 4px;
      margin-right: -2px;
    }
  }
`;
export default ContactSC;
