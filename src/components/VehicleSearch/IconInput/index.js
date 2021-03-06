import React, { useState } from "react";
import * as S from "./styles";
import Select from "../../Form/Select";

const IconInput = (props) => {
  const containerStyle = {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  };

  const [distanceOptions, setDistanceOptions] = useState();
  const [city, setCity] = useState();

  const onChangeDistance = (option) => {
    setDistanceOptions(option.value);
  };

  const onChangeCity = (option) => {
    setCity(option.value);
  };

  return (
    <S.container>
      <S.locationContainer>
        <S.containerIcon>
          <S.icon icon={props.icon} />
        </S.containerIcon>
        <S.containerLabel>
          <S.label>Onde:</S.label>
        </S.containerLabel>
        <S.containerInput>
          <S.input
            type="text"
            placeholder="São Paulo - SP"
            onChange={onChangeCity}
            value={city}
          />
        </S.containerInput>
      </S.locationContainer>
      <S.distanceContainer>
        <Select
          description={"Km"}
          containerStyle={containerStyle}
          placeholder="Raio"
          label="Raio"
          value={distanceOptions}
          onChange={onChangeDistance}
          options={props.mileages}
        />
      </S.distanceContainer>
    </S.container>
  );
};

export default IconInput;
