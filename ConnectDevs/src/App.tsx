import { Router } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';

const App = () => (
    <>
        <Router />
		<ToastContainer theme='dark' transition={Slide}/>
    </>
);

export default App;
