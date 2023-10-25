import React from "react";
import "../../styles/globals.scss";
import Wrapper from "@/components/Wrapper/Wrapper";
import TextHColor from "@/components/TextHColor/TextHColor";
import Navbar from "@/components/Navbar/Navbar";

const TextHColorPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <TextHColor />
    </Wrapper>
  );
};

export default TextHColorPage;
