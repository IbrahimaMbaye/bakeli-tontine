import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './detailc.css';
import Table from 'react-bootstrap/Table';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
const data = [
    { id: 'Inscription', mois: 'janvier', date: '22-01-2022', montant: '25.000 FCFA' },
    {  id: 'Mensualite', mois: 'Fevrier', date: '23-02-2022', montant: '25.000 FCFA' },
    {  id: 'Inscription', mois: 'Mars', date: '12-03-2022', montant: '25.000 FCFA'},
    {  id: 'Mensualite', mois: 'Avril', date: '05-06-2022', montant: '25.000 FCFA' },
    {  id: 'Inscription', mois: 'Juin',date: '09-05-2022', montant: '25.000 FCFA'},
    {  id: 'Mensualite', mois: 'Juiellet', date: '',montant: '' },
  
  ];
  
function DetailC() {
  return (
    <div className='container'>
        <div className='row'>
    <div className='col-md-6'>
    <Card className='cbody'>
      <Card.Header className='cheader'>Detail cotisation</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
         <h2>Selena roy</h2>
         <p className='textdisigner'>Disigner</p>
        </Card.Text>
        <div className="container mt-4" >
      
      <Table  className='tab' striped bordered hover style={{borderRadius:'10px'}}>
        <thead  className="thead-dark" >
          <tr>
            <th>Mois</th>
            <th>Date</th>
            <th>Montant</th>
           
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              
              <td >{item.mois}</td>
              <td>{item.date}</td>
              <td>{item.montant}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
            <h3 className='total'>Total = 300.000 FCFA</h3>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  );
}

export default DetailC;