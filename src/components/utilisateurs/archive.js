import React from 'react'
import {Link} from "react-router-dom";
import { Table } from 'react-bootstrap';
function Archive() {
  return (
    <div className="tout">
                    <div className="free">
                    <div className="util">
                <h3>utilisateurs</h3>
                </div>
                </div>
                <div class="box-pad">
                <div class="box-un">
                    <h6>Membre actif</h6>
                    </div>    
                        <div class="box-un">
                        <h6>Membre bloqués</h6>
                        </div>
                            <div class="box-un">
                            <h6>Total effectif</h6>
                            </div>
                </div> 
                <div class="button">
                    <button class="btn btn-dark">ajouter</button>
                </div>
                <div class="tableau">
                <table class="table">
                <thead>
                            <tr class="table table-success ">
                                <th>Membre</th>
                                <th>date début</th>
                                <th>Seuil</th>
                                <th>Progression</th>
                                <th>Statut</th>
                                <th>Action
                            
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                        <td>coumba </td> 
                        <td>03/07/2023</td> 
                        <td>03/07/2023</td> 
                        <td>terminer</td> 
                        <td class="text-danger">bloqués</td> 
                        <td>
                    
                   
                   </td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
            <section>
                <footer>
                <Link to="/"> <h5  class="text-dark text-opacity-25">previous page</h5></Link>
                <h5 class="bg-success">1</h5>
                <h5>2</h5>
                <h5>3</h5>
                <h5>4</h5>
                <h5 > <Link to="/" class="text-dark text-decoration-none">Nest page</Link></h5> 
                </footer>
            </section>
</div>
    
  )
}

export default Archive
