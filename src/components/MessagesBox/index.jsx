import React from 'react';
import MessageCard from '../MessageCard';
import { MessagesBoxContainer, MessagesWrapper } from './styles';

const MessagesBox = () => {
  return (
    <MessagesBoxContainer>
      <h6>Mensagens salvas</h6>
      <MessagesWrapper>
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </MessagesWrapper>
    </MessagesBoxContainer>
  );
};

export default MessagesBox;
