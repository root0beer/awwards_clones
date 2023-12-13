import InteractiveGallery from "@/components/InteractiveGallery/InteractiveGallery";
import Navbar from "@/components/Navbar/Navbar";
import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";

const InteractiveGalleryPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <InteractiveGallery />
    </Wrapper>
  );
};

export default InteractiveGalleryPage;
