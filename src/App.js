import './App.css';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Modals from './Modals';

function App() {
  return (
  <Router>
    <div className="App">
    <Routes>
      <Route path='/'element={<Modals/>}/>
    </Routes>
 
    </div>
  </Router>
  );
}

export default App;
