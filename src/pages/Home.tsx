import { Box, Button, Slider } from '@material-ui/core';
import React, { useState } from 'react';

export default function Home() {
  const defaultSliderValue = 5;
  const [sliderValue, setSliderValue] = useState(defaultSliderValue);
  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    setSliderValue(parseInt(e.target.value, 10));
  }
  return (
        <Box sx = {{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
            <Box sx = {{ display: 'flex' }}>
                <Box sx = {{ display: 'flex' }}>
                    <Slider
                        aria-label='Number of questions'
                        defaultValue={defaultSliderValue}
                        valueLabelDisplay='auto'
                        step={1}
                        marks
                        min={1}
                        max={10}
                        value={sliderValue}
                        onChangeCommitted={() => handleChange}
                    />
                </Box>
                <Box sx = {{ display: 'flex' }}>
                    <Button sx={{ background: 'linear-gradient(120deg, rgba(77, 129, 213, 0.8) 0%, rgb(0, 71, 186) 100%) 0% 0% no-repeat padding-box padding-box transparent' }} >
                        Select
                    </Button>
                </Box>
            </Box>
        </Box>
  );
}
