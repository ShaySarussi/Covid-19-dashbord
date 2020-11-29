import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data: { cases, recovered, deaths,active }, country }) => {


  const barChart = (
    cases ? (
      <Bar
        data={{
          labels: ['חולים', 'מבריאים', 'נדבקים','מתים'],
          datasets: [
            {
              label: 'אנשים',
              backgroundColor: ['rgba(24, 196, 211, 1)', 'rgba(16, 188, 16, 1)', 'rgba(255, 113, 39, 1)','rgba(233, 0, 65, 1)'],
              data: [active, recovered, cases, deaths],
            },
          ],
        }}
        options={{
          legend: { display: false }
        }}
      />
    ) : null
  );


  return (
    <div className={styles.container}>
      {barChart}
    </div>

    
  );
};

export default Chart;
