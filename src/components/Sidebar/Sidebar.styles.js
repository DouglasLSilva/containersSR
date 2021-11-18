import styled from 'styled-components';

export const SidebarLinks = styled.div`
  margin-top: 8px;
  width: 100%;
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  font-weight: bold;

  > a {
    padding: 16px;
    border-radius: 8px;

    color: #FFF;
    text-decoration: none;

    transition: background-color 200ms;

    &:hover {
      background-color: #2596be;
    }

    &.active {
      color: #231B22;
      background-color: #F5F5FA;
    }

    @media(max-height: 800px) {
      font-size: 11px;
    }
  }
`;

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 220px;

  color: #FFF;
  background: #2596be;
  border-radius: 0 10px 10px 0;

  ${SidebarLinks} .MuiPaper-root {
    background-color: inherit;
    border-radius: 8px;
    color: #FFF;

    width: 188px;

    .MuiAccordionSummary-root {
      flex-direction: row;
      color: #FFF;

      &.Mui-expanded {
        background-color: #FFF;
        color: initial;

        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }

      .MuiAccordionSummary-expandIcon {
        margin-right: 0;
        transform: rotate(90deg);
        color: #FFFFFF;
      }

      .MuiAccordionSummary-expandIcon.Mui-expanded {
        color: initial;
        transform: rotate(270deg);
      }
    }

    .MuiCollapse-container {
      background-color: #F5F5FA;

      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    &:hover {
      background-color: #2596be;
    }
  }

  img {
    cursor: pointer;

    width: 188px;
    margin-top: 32px;
  }

  @media(max-height: 760px) {
    overflow-y: auto;
  }
`;
