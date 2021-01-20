import React from "react";

import {
  Container,
  Header,
  FirstField,
  SecondField,
  ThirdField,
} from "./styles";

import { RiCloseFill, RiAttachmentLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiPriceTagLine } from "react-icons/ri";

function CreateTask({ onClose }) {
  return (
    <Container>
      <div className="closeButton" title="Close" onClick={onClose}>
        <RiCloseFill size={30} color="0f7b1e" />
      </div>
      <div className="headerContainer">
        <div className="colorTop" />
        <Header>
          <div className="container">
            <FaRegEdit size={40} />
            <div className="simple-modal-title">
              <h2>Task Manager</h2>
              <h1>Form</h1>
            </div>
          </div>
          <button>Share</button>
        </Header>
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
        <FirstField>
          <h2>* 1- What?</h2>
          <p>Describe what needs to be done:</p>
          <input />
        </FirstField>
        <SecondField>
          <p>2 - More information?</p>
        </SecondField>
        <ThirdField>
          <div className="third-row">
            <p>* 3 - Priority</p>
            <BiDotsVerticalRounded
              size={20}
              color={"888"}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="third-action">
            <RiPriceTagLine size={18} color={"888"} />
            <p>Add label</p>
          </div>
        </ThirdField>
      </div>
    </Container>
  );
}

export default CreateTask;
