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
        <span>Teste de conexão com o banco de dados:</span>
        <h5>OK</h5>
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
          Salvar
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default FormBox;
