import styled from "styled-components";

export const container = styled.div`
  background-color: #ffffff;
  padding: 30px 15px;
`;

export const containerCheckBox = styled.div``;

export const containerItems = styled.div`
  @media (min-width: 630px) {
    display: inline-block;
    vertical-align: top;
    width: 49%;
  }
`;

export const Row = styled.div`
  @media (min-width: 630px) {
    display: flex;
    padding: 7px 0;
  }
`;

export const Col = styled.div`
  @media (max-width: 629px) {
    margin-bottom: 10px;
  }

  @media (min-width: 630px) {
    flex: 1;
    padding: 0 6px;
  }
`;
