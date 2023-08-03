import React from 'react'
import '../utilisateurs/utilisateurs.css';
import './archive.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../utilisateurs/images/1.png';
import Logo2 from '../utilisateurs/images/2.png';
import Logo3 from '../utilisateurs/images/3.png';
import Logo4 from '../utilisateurs/images/4.png';
import Logo5 from '../utilisateurs/images/5.png';
function utilisateurs() {
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
                <button class="btn btn-dark position-relative float-right">ajouter</button>
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
                        <td class="text-success">terminer</td> 
                        <td><a href="supprimer.php">
                    <img src={Logo}/></a>    
                    <a href="../utilisateurs/archive.html">
                    <img src={Logo2}/></a>  
                    <a href="">
                    <img src={Logo3}/></a> </td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
            <section>
                <footer>
                <h5  class="text-dark text-opacity-25">previous page</h5>
                <h5 class="bg-success">1</h5>
                <h5>2</h5>
                <h5>3</h5>
                <h5>4</h5>
                    <h5>Nest page</h5>
                </footer>
            </section>
                
</div>
    
  )
}

export default utilisateurs;
