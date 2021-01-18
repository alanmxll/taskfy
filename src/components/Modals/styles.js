import styled from "styled-components";

export const Container = styled.div`
  div.colorTop {
    background: #3dc050;
    width: 500px;
    height: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  div.closeButton {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    position: absolute;
    top: 1%;
    left: 96.6%;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
  }

  div.contentCard {
    position: absolute;
    top: 5.5%;
    left: 72.5%;
    width: 500px;
    background-color: #fff;
    border-radius: 5px;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  color: #0f7b1e;
  padding: 30px;
  padding-left: 35px;

  div.simple-modal-title {
    padding-left: 5px;
  }

  h2.simple-modal-title {
    color: #888;
    font-size: 16px;
  }

  h1.simple-modal-title {
    font-size: 20px;
  }
`;
