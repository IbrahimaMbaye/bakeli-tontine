import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../dashboard/dashboard.css';
import monImage from '../images/tab.png';
import monImage2 from '../images/logo.png';


Chart.register(...registerables);

const Dashboard = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Cotisation',
        data: [10, 20, 15, 25, 30, 40],
        backgroundColor: '#093545',
        borderColor: '#20DF7F',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieChartData = {
    labels: ['Terminé', 'en cours', 'archive', 'bloque'],
    datasets: [
      {
        label: 'Class Strength',
        backgroundColor: ['#20DF7F', '#093545', ' #FFA8A7 ', '#FDD09F', ],
       
        data: [18, 35, 23, 9, ],
      },
    ],
  };

  return (
    <div class="card-deck1">
    <div class="card-deck">
  <div class="card1">
    <div class="card-body">
      <h5 class="card-title">Juin</h5>    
      <p class="card-text p1">255.000 FCFA</p>
      <p class="card-text"><small class="text-muted">Nombre cotisation: 27</small></p>
    </div>
  </div>
  <div class="card3">
    <div class="card-body">
      <h5 class="card-title">Mai</h5>
      <p class="card-text p1">100.000 FCFA</p>
      <p class="card-text"><small class="text-muted">Nombre de cotisation: 23</small></p>
    </div>
  </div>
  <div class="card2">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <img src={monImage} alt="Ma super image "className='monimage' />
      <div className='back1'></div>
            <img src={monImage2} alt="Ma super image "className='monimage2' />
      <p class="card-text"></p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
  </div>
<div className='mbaye'> 
  <div class="card4">
    <div class="card-body">
    <h5 class="card-title1 ">Evolution des Cotisations en fonction du temps</h5>
    <div className="chart-container">
                <Line data={chartData} options={chartOptions} />
              </div>
    </div>
  </div>
  <div class="card5">
    <div class="card-body">
      <h5 class="card-title2 text-center">Statistique</h5>
      <div className="chart2">
                <Pie data={pieChartData} options={{ responsive: true }} />
              </div>
      <p class="card-text"></p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
  </div>
  </div>


  );
};

export default Dashboard;
