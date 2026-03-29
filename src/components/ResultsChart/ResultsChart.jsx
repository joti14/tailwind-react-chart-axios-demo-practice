import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultData = [
  { "id": 1, "name": "Ayaan Rahman", "math": 85, "english": 78, "science": 92 },
  { "id": 2, "name": "Nusrat Jahan", "math": 74, "english": 81, "science": 88 },
  { "id": 3, "name": "Tamim Hasan", "math": 90, "english": 76, "science": 95 },
  { "id": 4, "name": "Sadia Islam", "math": 68, "english": 72, "science": 80 },
  { "id": 5, "name": "Mehedi Karim", "math": 88, "english": 84, "science": 91 },
  { "id": 6, "name": "Farzana Akter", "math": 79, "english": 75, "science": 85 },
  { "id": 7, "name": "Rafiul Ahmed", "math": 92, "english": 89, "science": 96 },
  { "id": 8, "name": "Mim Chowdhury", "math": 70, "english": 73, "science": 77 },
  { "id": 9, "name": "Sabbir Hossain", "math": 83, "english": 80, "science": 87 },
  { "id": 10, "name": "Tanjina Sultana", "math": 76, "english": 79, "science": 82 }
];

const salesData = [
  { "month": "Jan", "sales": 1200, "revenue": 2400, "profit": 800 },
  { "month": "Feb", "sales": 1500, "revenue": 2800, "profit": 950 },
  { "month": "Mar", "sales": 1700, "revenue": 3200, "profit": 1100 },
  { "month": "Apr", "sales": 1400, "revenue": 2600, "profit": 900 },
  { "month": "May", "sales": 1900, "revenue": 3500, "profit": 1250 },
  { "month": "Jun", "sales": 2100, "revenue": 3900, "profit": 1400 },
  { "month": "Jul", "sales": 2300, "revenue": 4200, "profit": 1550 },
  { "month": "Aug", "sales": 2000, "revenue": 3700, "profit": 1300 },
  { "month": "Sep", "sales": 2200, "revenue": 4100, "profit": 1480 },
  { "month": "Oct", "sales": 2500, "revenue": 4600, "profit": 1700 },
  { "month": "Nov", "sales": 2700, "revenue": 5000, "profit": 1850 },
  { "month": "Dec", "sales": 3000, "revenue": 5600, "profit": 2100 }
]

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='yellow'></Line>
                <Line dataKey={'english'} stroke='green'></Line>
                <Line dataKey={'science'} stroke='red'></Line>
                <Tooltip></Tooltip>
            </LineChart>

            <BarChart width={1000} height={500} data={salesData}>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey='sales' fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]}></Bar>
                <Bar dataKey='revenue' fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]}></Bar>
            </BarChart>


        </div>
    );
};

export default ResultsChart;