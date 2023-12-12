import React from 'react';
import Wrapper from '@/components/Wrapper/Wrapper';
import Navbar from '@/components/Navbar/Navbar';
import NavMenu from '../NavMenu';

const Layout = ({children}) => {
  return (
    <Wrapper>
      <Navbar />
      <NavMenu />
      {children}
    </Wrapper>
  )
}

export default Layout