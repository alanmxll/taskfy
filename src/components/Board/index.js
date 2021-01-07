import React from "react";

import { Container } from "./styles";
import List from "../List";

function Board() {
  return (
    <Container>
      <List />
      <List />
      <List />
      <List />
    </Container>
  );
}

export default Board;
