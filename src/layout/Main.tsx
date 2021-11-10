import React from 'react';
import { Box } from '@material-ui/core';

interface PageProps {
  children: React.ReactNode
}

const Main = ({ children }:PageProps) => (
  <Box component= 'main' sx = {{
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent',
  }}>
    {children}
  </Box>
);
export default Main;
