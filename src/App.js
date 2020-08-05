import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <Typography id="discrete-slider-custom" gutterBottom>
  Custom marks
</Typography>
<Slider
  defaultValue={20}
  getAriaValueText={valuetext}
  aria-labelledby="discrete-slider-custom"
  step={10}
  valueLabelDisplay="auto"
  marks={marks}
/></div>
  );
}

export default App;
