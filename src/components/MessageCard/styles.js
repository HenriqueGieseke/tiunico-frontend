import styled from 'styled-components';

export const MessageCardContainer = styled.div`
  border: 1px solid #e2e2ed;
  border-radius: 8px;
  padding: 1.5rem 5.7rem;
  transition: all 0.2s;

  transition: all 0.4s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const DatesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const DatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoSubtitle = styled.span`
  font-size: 0.7rem;
  color: #787893;
  width: fit-content;
  margin-bottom: 10px;
`;

export const DateText = styled.span``;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
  }
`;
