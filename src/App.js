import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Fixture from './components/Fixture'
import Stats from './components/Stats'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
