import React, { useState } from "react";
import * as S from "./styles";

const Select = (props) => {
  const {
    placeholder = "Change-Me",
    onChange,
    value,
    label,
    options,
    containerStyle,
    description,
  } = props;

  const [showOptions, setShowOptions] = useState(false);

  const _onChange = (option) => {
    onChange && onChange(option);
    setShowOptions(false);
  };

  const displayLabel = (value) => {
    const foundOption = options.find((op) => {
      return op.value === value;
    });

    return foundOption ? foundOption.label : "";
  };

  return (
    <S.container style={containerStyle}>
      <S.clickable onClick={() => setShowOptions(!showOptions)}>
        {value ? (
          <React.Fragment>
            <S.containerLabel>
              <S.label>{label}: </S.label>
            </S.containerLabel>
            <S.containerValue>
              <S.value>
                {displayLabel(value)} {description}
              </S.value>
            </S.containerValue>
            <S.containerIcon>
              <S.icon />
            </S.containerIcon>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <S.containerPlaceholder>
              <S.label>{placeholder}</S.label>
            </S.containerPlaceholder>
            <S.containerIcon>
              <S.icon />
            </S.containerIcon>
          </React.Fragment>
        )}
      </S.clickable>

      {Array.isArray(options) && (
        <S.containerOptions visible={showOptions} className="containerOptions">
          {options.map((op) => {
            return (
              <S.option
                key={op.value}
                onClick={() => _onChange(op)}
                current={value === op.value}
              >
                {op.label}
              </S.option>
            );
          })}
        </S.containerOptions>
      )}
    </S.container>
  );
};

export default Select;
