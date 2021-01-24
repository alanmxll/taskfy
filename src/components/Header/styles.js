import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  padding: 0 30px;
  background: #3dc050;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.div-title {
    display: flex;
    align-items: center;

    h1,
    h2 {
      margin-left: 5px;
    }
  }
`;

export const SubContainer = styled.div`
  height: 60px;
  padding: 0 30px;
  background: #0f7b1e;
  color: #fff;
  display: flex;
  align-items: center;

  div.end-subcontainer {
    height: 2rem;
    margin-left: 30px;
    border: 1.5px solid #fff;
  }
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
    background-color: #fb572a;
    border: 1px solid rgba(230, 236, 245, 0.4);
    border-radius: 5px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.8);
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
