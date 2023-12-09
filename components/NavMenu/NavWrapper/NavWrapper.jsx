import React from "react";
import styles from "./NavWrapper.module.scss";
import Header from "../Header/Header";

const NavWrapper = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default NavWrapper;
