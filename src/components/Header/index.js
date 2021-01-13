import React, { Fragment } from "react";

import { Container, SubContainer } from "./styles";

import { IoIosArrowBack } from "react-icons/io";
import Tab from "../Tab";

function Header() {
  return (
    <Fragment>
      <Container>
        <h1>Taskfy</h1>
      </Container>
      <SubContainer>
        <IoIosArrowBack size={24} color={"#FFF"} cursor={"pointer"} />
        <Tab title="KanBan"></Tab>
        <Tab title="Reports"></Tab>
        <Tab title="Calendar"></Tab>
      </SubContainer>
    </Fragment>
  );
}

export default Header;
