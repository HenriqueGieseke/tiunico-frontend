import React, { useEffect, useState } from 'react';
import { getDbConnectionStatus } from '../../services/getDbConnectionStatus';
import { postMessage } from '../../services/postMessage';
import {
  DbConnectionTextWrapper,
  Form,
  FormContainer,
  InputWrapper,
  SubmitButton,
} from './styles';

const FormBox = ({ setNewMessage, newMessage }) => {
  const [connectionStatus, setConnectionStatus] = useState(0);
  const [connectionString, setConnectionString] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await getDbConnectionStatus();
      setConnectionStatus(response.data.connectionStatus);
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

  const submitMessage = async (e) => {
    e.preventDefault();
    await postMessage(message);
    setNewMessage(!newMessage);
  };

  return (
    <FormContainer>
      <DbConnectionTextWrapper>
        <span>Teste de conexão com o banco de dados:</span>
        <h5 style={connectionStatus === 1 ? { color: '#15b511' } : {}}>
          {connectionString}
        </h5>
      </DbConnectionTextWrapper>
      <Form onSubmit={submitMessage}>
        <InputWrapper>
          <label htmlFor="">Mensagem</label>
          <input
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Digite a sua mensagem"
            required
          />
        </InputWrapper>
        <SubmitButton type="submit">Salvar</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default FormBox;
