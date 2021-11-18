import styled from 'styled-components';

import { neutral, purple } from '../../styles/colors';

export const BlurredBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);

  align-items: center;
  display: flex;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;

  height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
  background-color: ${neutral[100]};
  border: 1px solid ${neutral[300]};
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(152, 152, 166, 0.25);

  max-height: 95vh;
  max-width: ${({ maxWidth }) => maxWidth};
  padding: 35px 30px;
  width: ${({ width }) => width || '80%'};

  overflow-y: auto;
  position: relative;
  z-index: 5;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: ${({ noHeader }) => noHeader ? '0px' : '1.5rem' };

  width: 100%;

  > h1 {
    color: ${purple[300]};
  }

  svg {
    color: ${neutral[400]};

    font-size: 1.75rem;
  }
`;

export const Content = styled.main``;
