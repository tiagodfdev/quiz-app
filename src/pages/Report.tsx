import { Box, Typography } from '@material-ui/core';
import React from 'react';

export default function Report() {
  return (
        <Box sx = {{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
            <Box sx = {{ display: 'flex' }}>
                <Typography>Report</Typography>
            </Box>
        </Box>
  );
}
