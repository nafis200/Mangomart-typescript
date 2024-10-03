
import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: 'Water', value: 85 },
    { name: 'Fat', value: 0.4 },
    { name: 'Carbohydrates', value: 14 },
    { name: 'Protein', value: 0.9 },
  ];
  

const Graph = () => {
    
      return(
        <div className='h-[400px]'>
            <h1 className='h-24'></h1>
            <h1 className='text-center font-bold '>The graph Chart show the percentage of ingrediants</h1>
            <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            {/* <Pie dataKey="value" data={data01} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        </div>
      )
};

export default Graph;