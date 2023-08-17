import React from 'react'
import {Link} from "react-router-dom";
import { Table } from 'react-bootstrap';
import Logo4 from '../utilisateurs/images/4.png';
import Logo5 from '../utilisateurs/images/5.png';
import { FaArchive, FaEye } from 'react-icons/fa';
import { FaBan } from 'react-icons/fa';
import {FaBriefcaseMedical} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

function Archive() {
    const  columns = [
        { dataField: 'Membre', text: 'Membre',  headerClasses: 'blue-header',headerStyle: { backgroundColor: ' #00cc00', border: 'none'}},
        { dataField: 'Seuil',text: 'Seuil',  headerClasses: 'blue-header',headerStyle: { backgroundColor: ' #00cc00', border: 'none'}},
        { dataField: 'Datedebut' , text:'date',  headerClasses: 'blue-header',headerStyle: { backgroundColor: ' #00cc00', border: 'none'}}, 
        { dataField: 'Progression' , text:'progression',  headerClasses: 'blue-header', headerStyle: { backgroundColor: ' #00cc00', border: 'none'}}, 
        { dataField: 'Status' , text:'Status' ,  headerClasses: 'blue-header', headerStyle: { backgroundColor: ' #00cc00', border: 'none'}}, 
        { dataField: 'Action' , text:'Action',  headerClasses: 'blue-header', headerStyle: { backgroundColor: ' #00cc00', border: 'none'}}
    
    ];


      const data = [
        
        { headerClasses: 'border',BootstrapTable: {  border: 'none', borderCollapse :'Collapse', borderSpacing:'0'}, Membre: 'John', Seuil: 25, Datedebut:'03/07/2023' ,
         Progression:(
            <div className='actif1'> 
           <div class="p" >
           <div class="p3" >
           <h6> 100%</h6>
           </div>
             </div>
          </div>
    
        ),
        
        Status:(
            <div className='actif'> 
           <h6 class="text-success"> actif</h6>
          </div>
        ),
         Action:(
            <div>
            <FaEye /> <FaBriefcaseMedical /> <FaBan /> 
          </div>
    
        ),
    },
        { Membre: 'Jane', Seuil: 30 , Datedebut:'03/07/2023' ,
        Progression:(
        <div className='actif2'> 
           <div class="p2" >
           <div class="p3" >
           <h6>50%</h6>
            </div>
             </div>
          </div>
          ),
        Status:(
            <div className='actif'> 
           <h6 class="text-danger"> bloqués</h6>
          </div>
        ),
        
        Action:(
            <div>
            <FaEye /> <FaBriefcaseMedical /> < FaBan className='danger'/>
          </div>
    
        ),
    },
    
      ];    
      const containerStyle = {
        margin: '1rem',
        border: 'none !important',
        borderCollapse: 'collapse !important'
      };
  return (
    
    <div className="tout">
        
                    <div className="free">
                    <div className="util">
                <h3>utilisateurs</h3>
                </div>
                </div>
        
                <div class="box-pad">
                <div class="box-un">
                    <h6>Membre actif <img src={Logo5}/></h6>
                    </div>    
                        <div class="box-un">
                        <h6>Membre bloqués <img src={Logo4}/></h6>
                        </div>
                            <div class="box-un">
                            <h6>Total effectif</h6>
                            </div>
                </div>
                <div class="button">
                    <button class="btn btn-dark">ajouter</button>
                </div>
                <div className="container" >
                <BootstrapTable
                 keyField="id" class='bootstraptable table-borderless'
                  data={data }   
                  columns={columns} 
                  
                  >
  </BootstrapTable>
    </div>
                        <td class="mt">  
                        
                     </td>
                    
                    
            <section>
                
                <footer className='footer'>
                <h5> <Link to="/" class="text-decoration-none text-dark text-opacity-25 "> previous page</Link></h5>
                <h5 className="circle ">1</h5>
                <h5 >2 </h5>
                <h5>3</h5>
                <h5 >4</h5>
                <h5><Link to="/Archive"class="text-dark text-decoration-none ">Nest page</Link></h5> 
                </footer>
            </section>
                
</div>
    
  )
}


export default Archive
