import React from 'react'
import { Link } from "react-router-dom";
import './cotisationsterminer.css'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
function CotisationsTerminer() {
  const tableData = [
    { id: 1, membres: 'Salena roy', dateDebut: '01-01-2022', dateFin:'31-12-2022', montant:'300.000FCFA', statut:'Terminé',action:''},
    { id: 2, membres: 'Emma Watson', dateDebut: '01-01-2022', dateFin:'31-12-2022', montant:'300.000FCFA', statut:'Terminé',action:''},
    { id: 3, membres: 'Jhon Robert', dateDebut: '01-01-2022', dateFin:'31-12-2022', montant:'300.000FCFA', statut:'Terminé',action:'' },
    { id: 3, membres: 'Anne Hathaway', dateDebut: '01-01-2022', dateFin:'31-12-2022', montant:'300.000FCFA', statut:'Terminé',action:'' },
    { id: 3, membres: 'Ravi Shankar', dateDebut: '01-01-2022', dateFin:'31-12-2022', montant:'300.000FCFA', statut:'Terminé',action:'' },
    { id: 3, membres: 'Emma Stone', dateDebut: '01-01-2022', dateFin:'31-12-2022', montant:'300.000FCFA', statut:'Terminé',action:'' },
  ];


  return (
    <Card className='cardeh'>
    <Card.Header className='caheader'>Cotisation terminer</Card.Header>
    <Card.Body>
    <Table  className='my-table'>
          <thead>
            <tr>
              <th>Membres</th>
              <th>Date début</th>
              <th>Date fin</th>
              <th>Montant total cotisé</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(item => (
              <tr key={item.id}>
                <td>{item.membres}</td>
                <td>{item.dateDebut}</td>
                <td>{item.dateFin}</td>
                <td>{item.montant}</td>
                <td className={item.statut === 'Terminé' ? 'green-text' : ''}>
                {item.statut}
                </td>
                <td>
                  <FontAwesomeIcon icon={faEye} className="eye-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        
       <div className="circle-lay">
      <div className="circle green">1</div>
      <div className="circle dark">2</div>
      <div className="circle dark">3</div>
      <div className="circle dark">4</div>
    </div>
    <p className='text3 text-muted'>previause page
    </p>
    
    <p className='text4'>
            <Link to="/" className="link">next page</Link>
          </p>
          
   
      </Card.Body>
    </Card>
     
   
  );
};

export default CotisationsTerminer