import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>
    </Router>
  );
}

export default App;