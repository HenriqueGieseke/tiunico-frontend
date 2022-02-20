import React from 'react';
import FormBox from '../FormBox';
import MessagesBox from '../MessagesBox';
import { Main } from './styles';

const MainContent = () => {
  return (
    <Main>
      <FormBox />
      <MessagesBox />
    </Main>
  );
};

export default MainContent;
