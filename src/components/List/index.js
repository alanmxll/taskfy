import React from "react";

import { MdAdd } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";

import Card from "../Cards";

import { Container } from "./styles";

function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        <div>
          {data.creatable && (
            <button type="button">
              <MdAdd size={24} color="FFF" />
            </button>
          )}
          <BiDotsVerticalRounded
            size={22}
            color={"#888"}
            style={{ cursor: "pointer" }}
          />
        </div>
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}

export default List;
