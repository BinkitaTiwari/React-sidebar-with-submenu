import React from 'react';
import Table from './Table';
import Chart from './Charts';

export const Reports = () => {
  return (
    <div className='reports'>
      <Chart/>
    </div>
  );
};

export const ReportsOne = () => {
  return (
    <div className='reports'>
      <h1>Reports/reports1</h1>
    </div>
  );
};

export const ReportsTwo = () => {
  return (
    <div className="reports">
      <Table/>
    </div>
  );
};

export const ReportsThree = () => {
  return (
    <div className='reports'>
      <h1>Reports/reports3</h1>
    </div>
  );
};