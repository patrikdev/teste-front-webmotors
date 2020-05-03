import styled from "styled-components";

export const container = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  margin: 15px 0;
  transition: 0.3s;
  border: 1px solid #ccc;
  text-align: left;

  &:hover {
    -webkit-box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
  }
`;
