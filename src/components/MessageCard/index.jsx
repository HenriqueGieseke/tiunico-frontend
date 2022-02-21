import React from 'react';
import {
  InfoSubtitle,
  DatesContainer,
  DatesWrapper,
  DateText,
  MessageCardContainer,
  MessageContainer,
} from './styles';

const MessageCard = ({ message }) => {
  const dateRegular = new Date(message.date).toLocaleDateString();
  const dateMonth = new Date(message.date).toLocaleString('default', {
    month: 'long',
  });
  const dateDay = new Date(message.date).toLocaleDateString('default', {
    weekday: 'long',
  });
  const dateTime = new Date(message.date).toLocaleTimeString();

  return (
    <MessageCardContainer>
      <DatesContainer>
        <DatesWrapper>
          <InfoSubtitle>Formato 1</InfoSubtitle>
          <DateText>{dateRegular}</DateText>
        </DatesWrapper>
        <DatesWrapper>
          <InfoSubtitle>Formato 2</InfoSubtitle>
          <DateText>{dateDay}</DateText>
        </DatesWrapper>
        <DatesWrapper>
          <InfoSubtitle>Formato 3</InfoSubtitle>
          <DateText>{dateTime}</DateText>
        </DatesWrapper>
      </DatesContainer>
      <MessageContainer>
        <InfoSubtitle>Mensagem</InfoSubtitle>
        <span>{message.message}</span>
      </MessageContainer>
    </MessageCardContainer>
  );
};

export default MessageCard;
