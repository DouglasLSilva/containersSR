import { MainHeader } from '../../components/MainHeader';
import { Sidebar } from '../../components/Sidebar';

import { Container } from './MainLayout.styles';

const MainLayout = ({ children }) => {
  return (
    <Container>
      <MainHeader />

      <main>{children}</main>

      <Sidebar />
    </Container>
  );
};

export default MainLayout;
