import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'sidebar header' 'sidebar main';
  grid-gap: 8px;

  header {
    grid-area: header;
  }

  aside {
    grid-area: sidebar;
  }

  main {
    height: 100%;
    width: 100%;

    grid-area: main;
    padding: 24px;
    overflow: auto;
  }
`;
