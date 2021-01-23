import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  padding: 0 30px;
  background: #3dc050;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubContainer = styled.div`
  height: 60px;
  padding: 0 30px;
  background: #0f7b1e;
  color: #fff;
  display: flex;
  align-items: center;
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;

  img {
    background-color: #fff;
    border-radius: 100%;
  }

  div.div-notification {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #fb572a;
    width: 70px;
    height: 35px;
    margin: 10px;
    cursor: pointer;

    p {
      font-weight: bold;
      font-size: 16px;
      margin-right: 10px;
    }
  }
`;
