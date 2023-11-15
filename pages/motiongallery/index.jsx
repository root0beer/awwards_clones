import MotionGallery from '@/components/MotionGallery/MotionGallery';
import Navbar from '@/components/Navbar/Navbar';
import Wrapper from '@/components/Wrapper/Wrapper';
import React from 'react';

const MotionGalleryPage = () => {
  return (
    <Wrapper>
        <Navbar/>
        <MotionGallery/>
    </Wrapper>
  )
};

export default MotionGalleryPage;