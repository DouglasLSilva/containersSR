import styled from 'styled-components';

export const Container = styled.header`
  height: 100%;

  padding: 24px 24px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    display: flex;
    align-items: center;
    margin-top: 40px;

    > div {
      height: 36px;
      width: 6px;
      margin-right: 8px;

      border-radius: 4px;
      background: #2596be;
    }
  }
`;
