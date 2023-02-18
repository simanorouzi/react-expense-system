import * as React from 'react';
import { DataPointFormat } from '../App';
import ChartItem from './ChartItem';

const Chart = (props: { dataPoints: DataPointFormat[] }) => {
  const valuesArr = props.dataPoints.map((dataPoints) => dataPoints.value);
  const maxValue = Math.max(...valuesArr);

  return (
    <div className="chart-item">
      {props.dataPoints &&
        props.dataPoints.map((data) => (
          <ChartItem
            key={data.lable}
            lable={data.lable}
            value={data.value}
            maxValue={maxValue}
          />
        ))}
    </div>
  );
};

export default Chart;
