import React from 'react';
import { Box } from '@material-ui/core';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
// import CartProvider from '../context/Cart';

interface PageProps {
  children: React.ReactNode
}
const Layout = ({ children }:PageProps) => (
  // <CartProvider>
    <Box sx={{
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    }}
    >
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Box>
  // </CartProvider>
);
export default Layout;
