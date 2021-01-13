import React from "react";

import { Container, Label } from "./styles";

import { BsKanbanFill } from "react-icons/bs";
import { CgCalendarToday } from "react-icons/cg";
import { HiTemplate } from "react-icons/hi";

function Tab({ title }) {
  function returnTab() {
    switch (title) {
      case "KanBan":
        return <BsKanbanFill size={20} color={"#FFF"} cursor={"pointer"} />;
      case "Reports":
        return <HiTemplate size={20} color={"#FFF"} cursor={"pointer"} />;
      case "Calendar":
        return <CgCalendarToday size={20} color={"#FFF"} cursor={"pointer"} />;
      default:
        return;
    }
  }
  return (
    <Container>
      {returnTab()}
      <Label>{title}</Label>
    </Container>
  );
}

export default Tab;
