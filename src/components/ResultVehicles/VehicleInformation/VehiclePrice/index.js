import React from "react";
import * as S from "./styles";

const VehiclePrice = ({ price }) => {
  return (
    <S.container>
      <S.label>R$ {price}</S.label>
    </S.container>
  );
};

export default VehiclePrice;
