import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${(props) => (props.done ? 0.6 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 600;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3dc050;
      border: 0;
      margin-right: 5px;
      cursor: pointer;
    }
  }

  div.header-container {
    p {
      font-weight: bold;
      margin-left: 10px;
      color: #888;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
