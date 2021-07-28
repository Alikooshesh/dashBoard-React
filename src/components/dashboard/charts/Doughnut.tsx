import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ['Chrome', 'FireFox', 'Safari', 'Other'],
    datasets: [
        {
            label: '# of Viewers',
            data: [53, 19, 21, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1,
        },
    ],
};

const DoughnutChart = () => (
    <>
        <div className='header'>
        </div>
        <Doughnut data={data} type={"doughnut"}/>
    </>


);

export default DoughnutChart;