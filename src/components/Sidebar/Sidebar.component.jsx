import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { headerTitleAtom } from '../../atoms/header_title';

import { Container, SidebarLinks } from './Sidebar.styles';

const tabTitles = {
  containers: 'Containers',
  images: 'Imagens',
  dashboard: 'Dashboard',
  info: 'Informações',
};

const Sidebar = () => {
  const { pathname } = useLocation();
  const setAppTitle = useSetRecoilState(headerTitleAtom);

  useEffect(() => {
    const title = pathname === '/portfolio' ? 'portfolio' : pathname.split('/')[1];

    setAppTitle(tabTitles[title]);

    document.title = `${tabTitles[title]}`;
  }, [pathname, setAppTitle]);

  return (
    <Container>
      {pathname !== '/portfolio' &&
        <>
          <SidebarLinks>
            <NavLink to="/dashboard">
              Inicio
            </NavLink>

            <NavLink to="/containers">
              Containers
            </NavLink>

            <NavLink to="/images">
              Imagens
            </NavLink>

            <NavLink to="/info">
              Informações
            </NavLink>
          </SidebarLinks>
        </>
      }
    </Container>
  );
};

export default Sidebar;
