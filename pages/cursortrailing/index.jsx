import React from "react";
import Wrapper from "@/components/Wrapper/Wrapper";
import Navbar from "@/components/Navbar/Navbar";
import CursorT from "@/components/CursorT/CursorT";
import "../../styles/globals.scss";

const CursorTrailing = () => {
  return (
    <Wrapper>
      <Navbar />
      <CursorT />
    </Wrapper>
  );
};

export default CursorTrailing;
