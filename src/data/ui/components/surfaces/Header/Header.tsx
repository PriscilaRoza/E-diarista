import React from "react";
import * as H from "./Header.style";
import { Toolbar, Container } from "@mui/material";

const Header: React.FC = () => {
  return (
    <H.HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <H.HeaderLogo src={"/img/logos/logo.svg"} alt={"e-diaristas"} />
      </Toolbar>
    </H.HeaderAppBar>
  );
};

export default Header;
