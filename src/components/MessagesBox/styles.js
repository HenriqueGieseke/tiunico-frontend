import styled from 'styled-components';

export const MessagesBoxContainer = styled.div`
  max-width: 800px;
  width: 90%;
  padding: 2.3rem 4.1rem;
  background: #ffffff;
  border-radius: 12px;
  height: 60%;

  h6 {
    color: #787893;
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`;

export const MessagesWrapper = styled.div`
  height: calc(100% - 1rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  overflow-y: auto;
`;
