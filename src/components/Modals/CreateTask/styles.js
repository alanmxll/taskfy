import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;

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

  div.headerContainer {
    position: absolute;
    top: 5.5%;
    left: 72.5%;
    width: 500px;
    background-color: #fff;
    border-radius: 5px;
  }

  div.actionButtons {
    display: flex;
    align-items: center;
    margin-left: 10px;
    :first-child {
      padding-left: 10px;
    }

    p {
      color: #0f7b1e;
      font-weight: bold;
      margin-left: 5px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  color: #0f7b1e;
  padding: 30px;
  justify-content: space-between;

  div.container {
    display: flex;
  }

  div.simple-modal-title {
    padding-left: 5px;
  }

  h1 {
    font-size: 20px;
  }

  h2 {
    color: #888;
    font-size: 16px;
  }

  button {
    background-color: rgba(0, 255, 50, 0.15);
    color: #0f7b1e;
    font-weight: bold;
    font-size: 16px;
    border-radius: 5px;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    padding: 0 20px;
    cursor: pointer;
  }
`;

export const FirstField = styled.div`
  padding: 30px;
  font-weight: bold;

  h2 {
    margin-bottom: 5px;
    font-size: 14px;
  }

  p {
    color: #888;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 35px;
    border: 1px solid #0f7b1e;
    border-radius: 4px;
    padding: 10px;
    font-size: 16px;
    margin-top: 5px;
  }
`;

export const SecondField = styled.div`
  padding-left: 30px;
  font-weight: bold;
  color: #888;
  text-decoration: underline;
  cursor: pointer;
`;

export const ThirdField = styled.div`
  padding: 0 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;

  div.third-row {
    display: flex;
    justify-content: space-between;
  }

  div.third-action {
    display: flex;
    flex-direction: row;
    width: max-content;
    cursor: pointer;

    p {
      text-decoration: underline;
      color: #0f7b1e;
      margin: 3px;
    }
  }
`;
