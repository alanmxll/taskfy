import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  height: 3.5rem;
  border-bottom: ${({ selected }) => (selected ? "3px solid #fff" : "none")};
  opacity: ${({ selected }) => (selected ? "1" : "0.5")};
  cursor: pointer;

  :hover {
    border-bottom: 3px solid #fff;
  }
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-left: 3px;
`;
