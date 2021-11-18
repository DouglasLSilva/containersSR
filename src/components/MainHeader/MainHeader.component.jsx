import { useRecoilValue } from 'recoil';

import { headerTitleAtom } from '../../atoms/header_title';

import { Container } from './MainHeader.styles';

const MainHeader = () => {
  const header_title = useRecoilValue(headerTitleAtom);

  return (
    <Container>
      <h1>
        <div></div>

        {header_title}
      </h1>
    </Container>
  );
};

export default MainHeader;
