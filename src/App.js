import React from 'react';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Sidebar from './Components/Sidebar.js';
import Dashboard from  './Components/dashboard/dashboard.js';
import Utilisateurs from  './Components/dashboard/Utilisateurs.js';
import Cotisations from  './Components/cotisations/cotisations.js';
import Archives from './Components/dashboard/Archives';
import Generaux from './Components/dashboard/Generaux';
import Bloques from './Components/dashboard/Bloques';
import Utilisateur from './Components/dashboard/Utilisateur';
import Navbar from './Components/dashboard/Navbar';
import NextPage from './Components/cotisations/NextPage.js';
import Home from './Components/cotisations/Home.js';
import DetailC from './Components/cotisations/DetailC.js';
import DetailC1 from './Components/cotisations/DetailC1.js';
import DetailC2 from './Components/cotisations/DetailC2.js';
import CotisationsTerminer from './Components/cotisations/CotisationsTerminer.js';





const App = () =>{

  return (
    
   <BrowserRouter>
  <Navbar/>
   <Sidebar>
   <Routes>
      <Route path="/"element={<Dashboard/>}/>
      <Route path="/ dashboard"element={<Dashboard/>}/>
      <Route path="/ Utilisateurs"element={<Utilisateurs/>}/>
      <Route path="/ cotisations"element={<Cotisations/>}/>
      <Route path="/archives" element={<Archives />} />
      <Route path="/Generaux" element={<Generaux />} />
      <Route path="/Bloques" element={<Bloques />} />
      <Route path="/utilisateur" element={<Utilisateur />} />
      <Route path="/nextpage" element= {<NextPage />} />
      <Route path="/cotisations"element={<Cotisations/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/detailc" element={<DetailC />} />
        <Route path="/detailc1" element={<DetailC1 />} />
        <Route path="/detailc2" element={<DetailC2 />} />
        <Route path='/cotisationsterminer' element={<CotisationsTerminer />} />
        
   </Routes>
   </Sidebar>
   </BrowserRouter>
  );

};

export default App;