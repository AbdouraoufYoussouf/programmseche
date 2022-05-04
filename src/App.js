import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { Details } from './pages/Details';
import Home from './pages/Home';
import { Program } from './pages/Program';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='program' element={<Program/>} />
        <Route path='detail' element={<Details/>} />
      </Routes>
    </>
  );
}

export default App;
