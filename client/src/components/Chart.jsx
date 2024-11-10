import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
        datasets: [
            {
                label: 'Correct',
                data: [10, 15, 8, 20, 18],
                backgroundColor: 'rgba(128, 189, 119, 1)',
                hoverBackgroundColor: 'rgba(105, 237, 85, 1)',
                borderRadius: 10,
                barThickness: 20,
            },
            {
                label: 'Incorrect',
                data: [5, 5, 10, 3, 8],
                backgroundColor: 'rgba(189, 119, 119, 1)',
                hoverBackgroundColor: 'rgba(235, 45, 45, 1)',
                borderRadius: 0,
                barThickness: 20,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: { enabled: true },
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                },
            },
            y: {
                stacked: true,
                beginAtZero: true,
                ticks: {
                    stepSize: 5,
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default Chart;
