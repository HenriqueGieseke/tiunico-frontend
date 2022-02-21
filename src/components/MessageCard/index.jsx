import React, { useState } from 'react';
import { dateHelper } from '../../helpers/dateHelper';
import {
  InfoSubtitle,
  DatesContainer,
  DatesWrapper,
  DateText,
  MessageCardContainer,
  MessageContainer,
} from './styles';

const MessageCard = ({ message }) => {
  const [dateObj] = useState(dateHelper(message.date));

  return (
    <MessageCardContainer>
      <DatesContainer>
        <DatesWrapper>
          <InfoSubtitle>Formato 1</InfoSubtitle>
          <DateText>{dateObj.dateRegular}</DateText>
        </DatesWrapper>
        <DatesWrapper>
          <InfoSubtitle>Formato 2</InfoSubtitle>
          <DateText>{`${dateObj.yearNumber}-${dateObj.finalMonthNumber}-${dateObj.dayNumber}`}</DateText>
        </DatesWrapper>
        <DatesWrapper>
          <InfoSubtitle>Formato 3</InfoSubtitle>
          <DateText>{`${dateObj.weekDay}, ${dateObj.dayNumber} de ${dateObj.dateMonthWord} de ${dateObj.yearNumber} ${dateObj.finalDateTime}`}</DateText>
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
