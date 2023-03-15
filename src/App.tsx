import { Slide, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"
import { AppRouter } from './routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <>
    <GlobalStyles />
    <AppRouter />
    <ToastContainer theme='dark' transition={Slide} />
  </>
);

export default App;
