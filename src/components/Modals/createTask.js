import React from "react";

import { Container, HeaderModal } from "./styles";

import { RiCloseFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

function CreateTask({ onClose }) {
  return (
    <Container>
      <div className="closeButton" title="Close" onClick={onClose}>
        <RiCloseFill size={30} color="0f7b1e" />
      </div>
      <div className="contentCard">
        <div className="colorTop" />
        <HeaderModal>
          <FaRegEdit size={40} />
          <div className="simple-modal-title">
            <h2 className="simple-modal-title">Task Manager</h2>
            <h1 className="simple-modal-title">Form</h1>
          </div>
        </HeaderModal>
      </div>
    </Container>
  );
}

export default CreateTask;
