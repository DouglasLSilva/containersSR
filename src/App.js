import { StylesProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <StylesProvider injectFirst={true}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </RecoilRoot>

      <GlobalStyle />
    </StylesProvider>
  );
}

export default App;
