/* eslint-disable react/function-component-definition */
// import React from "react";
// import PropTypes from "prop-types";
// import {
//   LabelStyled,
//   FormGroupStyled,
//   InputStyled,
//   TextAreaStyled,
// } from './FormGroupStyledComponents';

const FormGroup = ({
  nameLabel,
  inputType,
  field,
  formValue = "",
  changeFunction,
  placeHolder = "Enter Input...",
}) => (
  <div className="mb-5">
    <label className="font-bold mb-1 block" htmlFor={field}>
      {nameLabel}:
    </label>
    {field === "summary" ||
    field.includes("description") ||
    field.includes("Schema") ? (
      <textarea
        className="w-full p-2 mt-1 border border-gray-300 rounded min-h-[100px]"
        id={field}
        name={field}
        value={formValue}
        onChange={changeFunction}
        placeholder={placeHolder}
        required
      />
    ) : (
      <input
        className="w-full p-2 mt-1 border border-gray-300 rounded"
        type={inputType}
        id={field}
        name={field}
        value={formValue}
        onChange={changeFunction}
        placeholder={placeHolder}
        required
      />
    )}
  </div>
);

// FormGroup.propTypes = {
//   nameLabel: PropTypes.string.isRequired,
//   field: PropTypes.string.isRequired,
//   formValue: PropTypes.string.isRequired,
//   changeFunction: PropTypes.func.isRequired,
//   inputType: PropTypes.string.isRequired,
//   placeHolder: PropTypes.string.isRequired,
// };

export default FormGroup;
