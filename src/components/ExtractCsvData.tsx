import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv } from 'd3';

const Extract = () => {
    const [data, setData] = useState([]);
    useEffect(() => {csv('data.csv').then(setData);}, []);
  };

export default Extract;