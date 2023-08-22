import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const data = [
    
    {  name: 'Selena Roy', date: '01/01/2022', montantcotise: '25.000 FCFA', montantrestant:'100.000', 
action:(<Link to="/DetailC" className="linkk"><FontAwesomeIcon icon={faEye} onClick={() => ('')}
className="eye-icon"></FontAwesomeIcon></Link>
),
},
    {  name: 'Emma Watson', date: '01/01/2022', montantcotise: '25.000 FCFA',montantrestant:'100.000',
    action:(<Link to="/DetailC1" className="linkk"><FontAwesomeIcon icon={faEye} onClick={() => ('')}
className="eye-icon"></FontAwesomeIcon></Link>
),
 },
    {   name: 'Jhon Robert', date: '01/01/2022', montantcotise: '25.000 FCFA',montantrestant:'100.000',
    action:(<FontAwesomeIcon icon={faEye} >
    </FontAwesomeIcon>),
},
    {  name: 'Anne Hathaway', date: '01/01/2022', montantcotise: '25.000 FCFA',montantrestant:'100.000',
  action: (<Link to="/DetailC2" className="linkk"><FontAwesomeIcon icon={faEye} onClick={() => ('')}
className="eye-icon"></FontAwesomeIcon></Link>
),
    },
    {  name: 'Ravi Shankar', date: '01/01/2022', montantcotise: '25.000 FCFA',montantrestant:'100.000'
, action:(<FontAwesomeIcon icon={faEye} >
    </FontAwesomeIcon>),},
    {   name: 'Emma Stone', date: '01/01/2022',montantcotise: '25.000 FCFA',montantrestant:'100.000',
    action:(<FontAwesomeIcon icon={faEye} >
        </FontAwesomeIcon>), },
  
  ];
 
function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEyeClick = (item) => {
    setSelectedItem(item);
  };
    
  return (
    
    <div className="container mt-5 ">
     
      <div className="background">
      <div className="ellipse-container ellipse1"></div>
      <div className="ellipse-container ellipse2"></div>
      <div className="ellipse-container ellipse3"></div>
    </div>
    <div className="row  ">
        
        <div className="col-md-4 ">
          <div className="card6">
            <div className="card-body">
              <p className="card-title">Juin</p>
              <h5 className="card-text">225.000 FCFA</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card6">
            <div className="card-body">
              <p className="card-title">Main</p>
              <h5 className="card-text">100.000 FCFA</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
            
          <div className="card6">
            <div className="card-body">
              <p className="card-title">Total Caisse</p>
              <h5 className="card-text">3.500.000 FCFA</h5>
              <div>
              <ProgressBar  variant="success" now={77}  className="progress"/>

            </div>
            <h6>77% du seuil</h6>
          </div>
        </div>
        
        </div>

      



    
        
         <div className="container mt-5" >
        <div className="row">
         <Table className="TABLENEXT" >
           <thead>
             <tr>
               <th>Membres</th>
               <th>Date début</th>
               <th>Montant cotisé</th>
               <th>Montant restant</th>
               <th>Actions</th>
             </tr>
           </thead>
           <tbody>
             {data.map((item) => (
               <tr key={item.key}>
                 <td>{item.name}</td>
                 <td>{item.date}</td>
                 <td>{item.montantcotise}</td>
                 <td>{item.montantrestant}</td>
                 <td>{item.action}
          </td>
               </tr>
             ))}
           </tbody>
         </Table>
         
       </div>
       <div className="circle-layout">
      <div className="circle green">1</div>
      <div className="circle white">2</div>
      <div className="circle white">3</div>
      <div className="circle white">4</div>
    </div>
    <p className='text text-muted'>
        <Link to="/NextPage" className="link">previause page</Link>
    </p>
    
    <p className='text2'>
            <Link to="/Home" className="link">next page</Link>
          </p>
          </div>
   </div>
    </div>
  );
}

export default Home;