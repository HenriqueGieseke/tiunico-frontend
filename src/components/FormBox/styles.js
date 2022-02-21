import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 800px;
  width: 90%;
  padding: 2.3rem 4.1rem;
  background: #ffffff;
  border-radius: 12px;
  gap: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DbConnectionTextWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;

  span {
    font-weight: 500;
  }

  h5 {
    margin-left: 0.5rem;
    font-weight: 700;
    color: #15b511;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 3rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    border: none;
    border-bottom: 1px solid #787893;
    padding: 1rem 0.7rem;
    outline: none;
    opacity: 0.5;
    transition: all 0.2s;

    &:focus {
      opacity: 1;
    }
  }

  label {
    color: #787893;
    font-size: 0.8rem;
  }
`;

export const SubmitButton = styled.button`
  width: min-content;
  height: min-content;
  border: none;
  background-color: #1172eb;
  padding: 0.8rem 3.5rem;
  text-transform: uppercase;
  color: #fff;
  border-radius: 120px;
  transition: all 0.4s;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &:active {
    transform: translateY(2px);
  }
`;
