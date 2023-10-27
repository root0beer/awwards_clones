import CurvedMenu from "@/components/CurvedMenu/CurvedMenu";
import Navbar from "@/components/Navbar/Navbar";
import Wrapper from "@/components/Wrapper/Wrapper";
import React from "react";
import "../../styles/globals.scss";

const CurvedMenuPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <CurvedMenu />
    </Wrapper>
  );
};

export default CurvedMenuPage;
