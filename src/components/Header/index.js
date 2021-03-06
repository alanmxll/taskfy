import React, { Fragment } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { BiBell, BiDotsVerticalRounded } from "react-icons/bi";
import { RiChatSmileLine } from "react-icons/ri";
import { CgGoogleTasks } from "react-icons/cg";

import { Container, SubContainer, UserMenu } from "./styles";

import Tab from "../Tab";
import UserAvatar from "../../assets/images/robot_avatar.png";

function Header() {
  return (
    <Fragment>
      <Container>
        <div className="div-title">
          <CgGoogleTasks size={30} />
          <h1>Taskfy</h1>
          <h2> - Team Management</h2>
        </div>
        <UserMenu>
          <RiChatSmileLine title={"Chat"} size={26} cursor={"pointer"} />
          <div className="div-notification" title={"Notification"}>
            <p>1</p>
            <BiBell size={22} />
          </div>
          <img src={UserAvatar} width={37} alt="" title={"User"} />
          <BiDotsVerticalRounded size={24} cursor={"pointer"} />
        </UserMenu>
      </Container>
      <SubContainer>
        <IoIosArrowBack size={24} cursor={"pointer"} />
        <Tab title="KanBan" selected={true} />
        <Tab title="Reports" selected={false} />
        <Tab title="Calendar" selected={false} />
        <div className="end-subcontainer" />
      </SubContainer>
    </Fragment>
  );
}

export default Header;
