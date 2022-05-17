import React from 'react';
import './Chart.css'
import ChartBar from './ChartBar';

const Chart = ({ datas }) => {
    const dataValues = datas.map(data => data.value)
    const maxValue = Math.max(...dataValues);
    return (
        <div className='chart'>
            {datas.map(data =>
                <ChartBar
                    key={data.label}
                    value={data.value}
                    maxValue={maxValue}
                    label={data.label}
                />)}
        </div>
    )
}

export default Chart;