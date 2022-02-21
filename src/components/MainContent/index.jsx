import React, { useEffect, useState } from 'react';
import { getMessages } from '../../services/getMessages';
import FormBox from '../FormBox';
import MessagesBox from '../MessagesBox';
import { Main } from './styles';

const MainContent = () => {
  const [messagesArray, setMessagesArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await getMessages();
      setMessagesArray(data.data);
    };

    fetchData();
    setLoading(false);
  }, [newMessage]);

  return (
    <Main>
      <FormBox setNewMessage={setNewMessage} newMessage={newMessage} />
      <MessagesBox
        setNewMessage={setNewMessage}
        loading={loading}
        messagesArray={messagesArray}
      />
    </Main>
  );
};

export default MainContent;
