import React, { Fragment } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { BiBell, BiDotsVerticalRounded } from "react-icons/bi";
import { RiChatSmileLine } from "react-icons/ri";

import { Container, SubContainer, UserMenu } from "./styles";

import Tab from "../Tab";
import UserAvatar from "../../assets/images/robot_avatar.png";

function Header() {
  return (
    <Fragment>
      <Container>
        <h1>Taskfy</h1>
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
        <Tab title="KanBan"></Tab>
        <Tab title="Reports"></Tab>
        <Tab title="Calendar"></Tab>
      </SubContainer>
    </Fragment>
  );
}

export default Header;
