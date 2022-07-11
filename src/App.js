// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from "./pages/Profile";

// 

import {StyledContainer} from './components/Styles';

// Loader Spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
        <StyledContainer>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/' element={<Home/>} />
          </Routes>
        </StyledContainer>
    </Router>
    
    
  );
}

export default App;
