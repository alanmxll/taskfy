import React, { useState } from "react";

import {
  Container,
  Header,
  FirstField,
  SecondField,
  ThirdField,
  FourthField,
  CustomFormButton,
} from "./styles";

import { RiCloseFill, RiAttachmentLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiPriceTagLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { MdAdd } from "react-icons/md";

function CreateTask({ onClose }) {
  const [secondFieldClicked, setSecondFieldClicked] = useState(false);

  function onClickInSecondField() {
    setSecondFieldClicked(!secondFieldClicked);
  }

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
          <p className="second-title" onClick={onClickInSecondField}>
            2 - More information?
          </p>
          {secondFieldClicked && (
            <>
              <p>If necessary, give more information about the task:</p>
              <input />
            </>
          )}
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
        <FourthField>
          <p>* 4 - Assigne</p>
          <div className="fourth-action">
            <HiOutlineUser size={18} color={"888"} />
            <p>Add assigne</p>
          </div>
        </FourthField>
        <CustomFormButton>
          <div className="custom-button-container">
            <MdAdd size={20} color={"0f7b1e"} />
          </div>
          <p className="p-click">Click here</p>
          <p className="p-no-click">to custom this form.</p>
        </CustomFormButton>
        <button className="create-issue">
          <p className="button-title">Create Issue!</p>
          <p className="p-button">- or press ctrl + enter</p>
        </button>
      </div>
    </Container>
  );
}

export default CreateTask;
