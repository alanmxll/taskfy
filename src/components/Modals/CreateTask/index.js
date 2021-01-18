import React from "react";

import { Container, HeaderModal } from "./styles";

import { RiCloseFill, RiAttachmentLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";

function CreateTask({ onClose }) {
  return (
    <Container>
      <div className="closeButton" title="Close" onClick={onClose}>
        <RiCloseFill size={30} color="0f7b1e" />
      </div>
      <div className="headerContainer">
        <div className="colorTop" />
        <HeaderModal>
          <div className="container">
            <FaRegEdit size={40} />
            <div className="simple-modal-title">
              <h2 className="simple-modal-title">Task Manager</h2>
              <h1 className="simple-modal-title">Form</h1>
            </div>
          </div>
          <button>Share</button>
        </HeaderModal>
        <div className="actionButtons">
          <div className="actionButtons">
            <AiOutlineCreditCard size={20} color={"0f7b1e"} />
            <p>Due date</p>
          </div>
          <div className="actionButtons">
            <RiAttachmentLine size={20} color={"0f7b1e"} />
            <p>Attachment</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CreateTask;
