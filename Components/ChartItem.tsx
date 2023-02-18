import * as React from 'react';

type chartItemFormat = {
  lable: string;
  value: number;
  maxValue: number;
};
const ChartItem = (props: chartItemFormat) => {
  let barFillHeight = '0%';
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div>
      <div className="chart-inner">
        <div className="chart-fill" style={{ height: barFillHeight }}></div>
      </div>
      <label>{props.lable}</label>
    </div>
  );
};

export default ChartItem;
