import React, { useEffect, useState } from 'react';
import { getMessages } from '../../services/getMessages';
import FormBox from '../FormBox';
import MessagesBox from '../MessagesBox';
import { Main } from './styles';

const MainContent = () => {
  const [messagesArray, setMessagesArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await getMessages();
      setMessagesArray(data.data);
      console.log(data);
    };

    fetchData();
    setLoading(false);
  }, []);

  return (
    <Main>
      <FormBox />
      <MessagesBox loading={loading} messagesArray={messagesArray} />
    </Main>
  );
};

export default MainContent;
