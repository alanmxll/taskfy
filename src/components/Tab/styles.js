import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  :last-child {
    border-right: 1px solid #fff;
    height: 2rem;
    padding-right: 30px;
  }
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-left: 3px;
`;
