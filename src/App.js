import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
