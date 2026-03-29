import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    // console.log(marksData)

    // data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            math: studentData.marks.math,
            english: studentData.marks.english,
            science: studentData.marks.science,
        }
        const avg = (student.math + student.english + student.science) / 3;
        student.avg = avg;
        return student;
    })
    console.log(marksChartData)

    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={'avg'} fill='yellow'></Bar>
                <Bar dataKey={'math'} fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;