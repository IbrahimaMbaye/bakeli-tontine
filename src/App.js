import React from 'react';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Sidebar from './Components/Sidebar.js';
import Dashboard from  './Components/dashboard/Dashboard.js';
import Utilisateurs from  './Components/dashboard/Utilisateurs.js';
import Cotisations from  './Components/dashboard/Cotisations.js';
import Archives from './Components/dashboard/Archives';
import Generaux from './Components/dashboard/Generaux';
import Bloques from './Components/dashboard/Bloques';
import Utilisateur from './Components/dashboard/Utilisateur';
import Navbar from './Components/dashboard/Navbar';





const App = () =>{

  return (
    
   <BrowserRouter>
  <Navbar/>
   <Sidebar>
   <Routes>
      <Route path="/"element={<Dashboard/>}/>
      <Route path="/ dashboard"element={<Dashboard/>}/>
      <Route path="/ Utilisateurs"element={<Utilisateurs/>}/>
      <Route path="/ Cotisations"element={<Cotisations/>}/>
      <Route path="/archives" element={<Archives />} />
      <Route path="/Generaux" element={<Generaux />} />
      <Route path="/Bloques" element={<Bloques />} />
      <Route path="/utilisateur" element={<Utilisateur />} />
      
   </Routes>
   </Sidebar>
   </BrowserRouter>
  );

};

export default App;