import ThreeD from "@/components/ThreeD/ThreeD";
import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";
import "../../styles/globals.scss";
import Navbar from "@/components/Navbar/Navbar";

const ThreeDperspective = () => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <ThreeD />
      </Wrapper>
    </>
  );
};

export default ThreeDperspective;
