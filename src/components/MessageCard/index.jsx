import React from 'react';
import {
  InfoSubtitle,
  DatesContainer,
  DatesWrapper,
  DateText,
  MessageCardContainer,
  MessageContainer,
} from './styles';

const MessageCard = () => {
  return (
    <MessageCardContainer>
      <DatesContainer>
        <DatesWrapper>
          <InfoSubtitle>Formato 1</InfoSubtitle>
          <DateText>31/10/2022</DateText>
        </DatesWrapper>
        <DatesWrapper>
          <InfoSubtitle>Formato 2</InfoSubtitle>
          <DateText>2022-10-31</DateText>
        </DatesWrapper>
        <DatesWrapper>
          <InfoSubtitle>Formato 3</InfoSubtitle>
          <DateText>Ter, 31 de Outubro de 2022 11:50</DateText>
        </DatesWrapper>
      </DatesContainer>
      <MessageContainer>
        <InfoSubtitle>Mensagem</InfoSubtitle>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas et
          malesuada egestas ultrices mi vitae morbi ac.
        </span>
      </MessageContainer>
    </MessageCardContainer>
  );
};

export default MessageCard;
