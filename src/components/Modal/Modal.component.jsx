import { Close } from '@material-ui/icons';
import { ClickAwayListener, Grow, IconButton } from '@material-ui/core';

import { ModalLoading } from './ModalLoading';

import { BlurredBackground, Container, Content, Header } from './Modal.styles';

const Modal = (
  { children, footer: Footer, loading, maxWidth, noHeader, open, title, width, handleCloseModal },
) => {
  return (
    <BlurredBackground>
      <ClickAwayListener onClickAway={handleCloseModal} mouseEvent="onMouseDown">
        <Grow in={open}>
          <Container width={width} maxWidth={maxWidth}>
            <Header noHeader={noHeader} >
              <h1>{title}</h1>

              <IconButton onClick={handleCloseModal}><Close /></IconButton>
            </Header>

            <Content>
              {loading ? <ModalLoading /> : children}
            </Content>

            {!!Footer && (
              <Footer />
            )}
          </Container>
        </Grow>
      </ClickAwayListener>
    </BlurredBackground>
  );
};

export default Modal;
