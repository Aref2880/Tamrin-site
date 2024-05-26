// src/BMIcalculator.js

import React, { useState } from 'react';

const BMIcalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const calculateBMI = () => {
    if (!weight ||!height) return;
    const bmi = parseFloat(weight) / (parseFloat(height) ** 2);
    return bmi.toFixed(2);
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <input
        type="number"
        placeholder="Enter weight in kg"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter height in cm"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={() => alert(`Your BMI is ${calculateBMI()}`)}>Calculate</button>
    </div>
  );
};

export default BMIcalculator;
