import React from 'react';
import {
  DbConnectionTextWrapper,
  Form,
  FormContainer,
  InputWrapper,
  SubmitButton,
} from './styles';

const FormBox = () => {
  return (
    <FormContainer>
      <DbConnectionTextWrapper>
        <span>Conexão com o banco de dados:</span>
        <h5>ONLINE</h5>
      </DbConnectionTextWrapper>
      <Form>
        <InputWrapper>
          <label htmlFor="">Mensagem</label>
          <input type="text" placeholder="Digite a sua mensagem" />
        </InputWrapper>
        <SubmitButton
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Enviar
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default FormBox;
