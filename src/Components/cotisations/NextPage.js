import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import './nextpage.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const data = [
    { id: 'Selena Roy', name: 'Selena Roy', date: '01/01/2022', montant: '25.000 FCFA',
  actions:(<p className="text6">valide</p> 
  ),
},
   
    { id: 'Emma Watson',  name: 'Emma Watson', date: '01/01/2022', montant: '25.000 FCFA',
    actions:(<button onClick={() => alert('valide !')}>
    Confirmer
  </button>
  ),
},
    { id: 'Emma Watson',  name: 'Jhon Robert', date: '01/01/2022', montant: '25.000 FCFA'
    ,
    actions:(<button onClick={() => alert('valide !')}>
    Confirmer
  </button>
  ),},
    { id: 'Emma Watson', name: 'Anne Hathaway', date: '01/01/2022', montant: '25.000 FCFA'
    ,
    actions:(<button onClick={() => alert('valide !')}>
    Confirmer
  </button>
  ), },
    { id: 'Emma Watson', name: 'Ravi Shankar', date: '01/01/2022', montant: '25.000 FCFA'
    ,
    actions:(<button onClick={() => alert('valide !')}>
    Confirmer
  </button>
  ),},
    { id: 'Emma Watson',  name: 'Emma Stone', date: '01/01/2022',montant: '25.000 FCFA'
    ,
    actions:(<button onClick={() => alert('valide !')}>
    Confirmer
  </button>
  ), },
    

   
     
  

];




function NextPage() {
  
  
    
  return (
    
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-4">
          <div className="card6">
            <div className="card-body">
              <p className="card-title">Juin</p>
              <h5 className="card-text">225.000 FCFA</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card6">
            <div className="card-body">
              <p className="card-title">Main</p>
              <h5 className="card-text">100.000 FCFA</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card6">
            < div className="card-body">
              <p className="card-title">Total Caisse</p>
              <h5 className="card-text">3.500.000 FCFA</h5>
              <div>
              <ProgressBar  variant="success" now={77}  className="progress"/>

            </div>
            
            <h6>77% du seuil</h6>
          </div>
        </div>

        </div>

      



    </div>
        
         <div className="container mt-5" >
        <div className="row">
         <Table  >
           <thead >
             <tr>
               <th>Membres</th>
               <th>Date</th>
               <th>Montant</th>
               <th>Actions</th>
             </tr>
           </thead>
           <tbody>
             {data.map((item) => (
               <tr key={item.id}>
                 <td >{item.name}</td>
                 <td>{item.date}</td>
                 <td>{item.montant}</td>
                 <td>{item.actions} 
        
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
    <Link to="/cotisations" className="link">previause page</Link>
    </p>
    
    <p className='text2'>
            <Link to="/Home" className="link">next page</Link>
          </p>
          </div>
   </div>
        
  );
}

export default NextPage;