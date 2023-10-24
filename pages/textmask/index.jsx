import Navbar from "@/components/Navbar/Navbar";
import Wrapper from "@/components/Wrapper/Wrapper";
import TextMask from "@/components/TextMask/TextMask";
import "../../styles/globals.scss";
import React from "react";

const TextMaskPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <TextMask />
    </Wrapper>
  );
};

export default TextMaskPage;
