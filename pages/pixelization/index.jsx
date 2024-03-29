import Navbar from "@/components/Navbar/Navbar";
import Pixeliz from "@/components/Pixeliz/Pixeliz";
import React from "react";
import Wrapper from "@/components/Wrapper/Wrapper";
import "../../styles/globals.scss";

const Pixelization = () => {
  return (
    <Wrapper>
      <Navbar />
      <Pixeliz />
    </Wrapper>
  );
};

export default Pixelization;
