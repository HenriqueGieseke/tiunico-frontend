import React, { useEffect, useState } from 'react';
import { getDbConnectionStatus } from '../../services/getDbConnectionStatus';
import {
  DbConnectionTextWrapper,
  Form,
  FormContainer,
  InputWrapper,
  SubmitButton,
} from './styles';

const FormBox = () => {
  const [connectionStatus, setConnectionStatus] = useState(0);
  const [connectionString, setConnectionString] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await getDbConnectionStatus();
      setConnectionStatus(response.data.connectionStatus);
      console.log(response);
      if (connectionStatus === 1) {
        setConnectionString('OK');
      } else if (connectionStatus === 0) {
        setConnectionString('Desconectado');
      } else if (connectionStatus === 2) {
        setConnectionString('Conectando');
      } else if (connectionStatus === 3) {
        setConnectionString('Desconectando');
      }
    };

    fetchStatus();
  }, [connectionString, connectionStatus]);

  return (
    <FormContainer>
      <DbConnectionTextWrapper>
        <span>Teste de conexão com o banco de dados:</span>
        <h5 style={connectionStatus === 1 ? { color: '#15b511' } : {}}>
          {connectionString}
        </h5>
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
