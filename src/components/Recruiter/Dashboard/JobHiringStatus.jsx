import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const JobHiringStatus = ({ title, dataPoints, color }) => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: title,
                data: dataPoints,
                fill: true,
                backgroundColor: `${color}20`, // Light version of color for the fill
                borderColor: color,
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="p-4 bg-white border rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <Line data={data} options={options} />
        </div>
    )
}

export default JobHiringStatus