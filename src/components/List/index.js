import React, { useState } from "react";

import { MdAdd } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";

import Card from "../Cards";
import CreateTask from "../Modals/CreateTask";

import { Container } from "./styles";

import Modal from "@material-ui/core/Modal";

function List({ data, index: listIndex }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container done={data.done}>
      <div className="header-container">
        <header>
          <h2>{data.title}</h2>
          <div>
            {data.creatable && (
              <button type="button" onClick={handleOpen}>
                <MdAdd size={24} color="FFF" />
              </button>
            )}
            <Modal
              open={open}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <CreateTask onClose={handleClose} />
            </Modal>
            <BiDotsVerticalRounded
              size={22}
              color={"#888"}
              style={{ cursor: "pointer" }}
            />
          </div>
        </header>
        <p>{data.cards.length} Total</p>
      </div>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}

export default List;
