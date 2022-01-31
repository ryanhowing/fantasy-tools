import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Fixture from './components/Fixture'
import Stats from './components/Stats'
function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="fixture" element={<Fixture />}></Route>
      <Route path="stats" element={<Stats />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
