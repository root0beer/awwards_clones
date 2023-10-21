import Main from "@/components/MainPage/MainPage";
import Link from "next/link";
import React from "react";
import Wrapper from "@/components/Wrapper/Wrapper";
import "../styles/globals.scss";

const HomePage = () => {
  return (
    <>
      <Wrapper>
        <Main />
      </Wrapper>
    </>
  );
};

export default HomePage;
