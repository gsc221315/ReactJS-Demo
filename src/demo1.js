import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));








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
        jhgsdjhfjf
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
        dfjkdshf
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />





<Button onClick={event =>  window.location.href='index2.js'} variant="contained" color="primary">
        Next
      </Button>

      
<Button onClick={event =>  window.location.href='index.js'} variant="contained" color="primary">
        Previous
      </Button>

      

    </div>
  );
}
