import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Program } from './pages/Program';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='program' element={<Program/>} />
      </Routes>
    </div>
  );
}

export default App;
