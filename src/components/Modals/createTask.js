import React from "react";

import { useStyles } from "./modalStyles";
import { Container, HeaderModal } from "./styles";

import { RiCloseFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

function CreateTask({ onClose }) {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.closeButton} title="Close" onClick={onClose}>
        <RiCloseFill size={24} color="0f7b1e" />
      </div>
      <div className={classes.contentCard}>
        <div className="colorTop" />
        <HeaderModal>
          <FaRegEdit size={40} />
          <div style={{ paddingLeft: "5px" }}>
            <h2
              id="simple-modal-title"
              style={{ color: "#888", fontSize: "16px" }}
            >
              Task Manager
            </h2>
            <h1 id="simple-modal-title" style={{ fontSize: "20px" }}>
              Form
            </h1>
          </div>
        </HeaderModal>
      </div>
    </Container>
  );
}

export default CreateTask;
