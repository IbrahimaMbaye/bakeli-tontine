import './App.css';
import Utilisateurs from './components/utilisateurs/utilisateurs';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Archive from './components/utilisateurs/Archive';
function App() {
  return (
    <div className="App">
      <Router>
    
      <Routes>
      <Route path="/" element ={<Utilisateurs/>}/>
     
        <Route path="/Archive" element ={<Archive/>}/>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
