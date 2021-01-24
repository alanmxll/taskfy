import React from "react";

import { Container, Label } from "./styles";

import { BsKanban } from "react-icons/bs";
import { CgCalendarToday } from "react-icons/cg";
import { HiTemplate } from "react-icons/hi";

function Tab({ title, selected }) {
  function returnTab() {
    switch (title) {
      case "KanBan":
        return <BsKanban size={20} color={"#FFF"} cursor={"pointer"} />;
      case "Reports":
        return <HiTemplate size={20} color={"#FFF"} cursor={"pointer"} />;
      case "Calendar":
        return <CgCalendarToday size={20} color={"#FFF"} cursor={"pointer"} />;
      default:
        return;
    }
  }
  return (
    <Container selected={selected}>
      {returnTab()}
      <Label>{title}</Label>
    </Container>
  );
}

export default Tab;
