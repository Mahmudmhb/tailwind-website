import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';

  const studentsMarks = [
    { id: 1, name: 'Student 1', math: 85, english: 78, chemistry: 92 },
    { id: 2, name: 'Student 2', math: 75, english: 80, chemistry: 88 },
    { id: 3, name: 'Student 3', math: 92, english: 88, chemistry: 95 },
    { id: 4, name: 'Student 4', math: 68, english: 72, chemistry: 78 },
    { id: 5, name: 'Student 5', math: 90, english: 85, chemistry: 89 },
    { id: 6, name: 'Student 6', math: 78, english: 82, chemistry: 91 },
    { id: 7, name: 'Student 7', math: 88, english: 90, chemistry: 94 },
    { id: 8, name: 'Student 8', math: 70, english: 75, chemistry: 80 },
    { id: 9, name: 'Student 9', math: 95, english: 92, chemistry: 96 },
    { id: 10, name: 'Student 10', math: 83, english: 86, chemistry: 88 },
    { id: 11, name: 'Student 11', math: 79, english: 84, chemistry: 87 },
    { id: 12, name: 'Student 12', math: 88, english: 89, chemistry: 93 },
  ];
  
  console.log(studentsMarks);
  


const Recharts = () => {
    return (
        <div>
            <h1 className='text-7xl text-center text-teal-500'>All students result</h1>
            
            <ComposedChart width={1000} height={700} data={studentsMarks}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis  />  
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="math" barSize={20} fill="red" />
          <Bar dataKey="english" barSize={20} fill="blue" />
          <Bar dataKey="chemistry" barSize={20} fill="#413ea0" />


          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
            </ComposedChart>
           

        </div>
    );
};

export default Recharts;