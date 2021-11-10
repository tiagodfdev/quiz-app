import { Box, Typography } from '@material-ui/core';
import React from 'react';

const Footer = () => (
        <Box sx = {{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
            <Box sx = {{ display: 'flex' }}>
                <Typography>Footer</Typography>
            </Box>
        </Box>
);
export default Footer;
