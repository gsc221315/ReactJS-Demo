import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    maxWidth: 400,
    flexGrow: 1,
  },
  margin: {
    height: theme.spacing(3),
  },
}));



//new code



//till here



const marks = [
  {
    value: 0,
    
  },
  {
    value: 1,
    
  },

  {
    value: 2,
    
  },
  {
    value: 3,
    
  },
];










function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider() {
  const classes = useStyles();



  
    
    





  return (
<div className={classes.root}>








    
      <Typography id="discrete-slider-custom" gutterBottom>
        Q1.Did You Work as Hard as You Could Have?
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
       
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />

<Typography id="discrete-slider-custom" gutterBottom>
        Q2. Did you Set and Maintain High Standards for yourself??
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />



<Typography id="discrete-slider-custom" gutterBottom>
        Q3.Did you Spend Enough Time to do Quality Work ?
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />



<Typography id="discrete-slider-custom" gutterBottom>
        Q4. Did you make Good Use of Available Resources ?
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />



<Typography id="discrete-slider-custom" gutterBottom>
        Q5.Did you ask Question If you Needed Help  ?
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
      
      <Typography id="discrete-slider-custom" gutterBottom>
        Q6.Did you examine Best Practices for Similar Work ?
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
      
      <Typography id="discrete-slider-custom" gutterBottom>
        Q7.Did you ask for motivational speeches  ?
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
      
      <Typography id="discrete-slider-custom" gutterBottom>
        Q8.What would you rate yourself in Leadership  ?
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
      
      <Typography id="discrete-slider-custom" gutterBottom>
        Q9.Are you capable to adopt Changes ?
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
      
      <Typography id="discrete-slider-custom" gutterBottom>
        Q10.How much you rate your confidence on yourself ?
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />




      <Button onClick={event =>  window.location.href='index1.js'} variant="contained" color="primary">
        Next
      </Button>

      

      <Button onClick={() => { alert('clicked') }}>Click me</Button>

     

      


      
    </div>
  );
}

