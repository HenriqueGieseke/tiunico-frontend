import React from 'react';
import MessageCard from '../MessageCard';
import { MessagesBoxContainer, MessagesWrapper } from './styles';

const MessagesBox = ({ messagesArray, loading }) => {
  if (loading) {
    return (
      <MessagesBoxContainer>
        <h4>Carregando mensagens...</h4>
      </MessagesBoxContainer>
    );
  } else {
    return (
      <MessagesBoxContainer>
        <h6>Mensagens salvas</h6>
        <MessagesWrapper>
          {messagesArray.map((message) => (
            <MessageCard key={message._id} message={message} />
          ))}
        </MessagesWrapper>
      </MessagesBoxContainer>
    );
  }
};

export default MessagesBox;
