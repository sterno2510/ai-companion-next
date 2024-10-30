import React from "react";

const FormGroup = ({
  nameLabel,
  inputType,
  field,
  formValue = "",
  changeFunction,
  placeHolder = "Enter Input...",
}) => (
  <div className="mb-5">
    {" "}
    <label className="font-bold mb-1 block" htmlFor={field}>
      {" "}
      {nameLabel}:
    </label>
    {field === "summary" ||
    field.includes("description") ||
    field.includes("Schema") ? (
      <textarea
        className="w-full p-2 mt-1 border border-gray-300 rounded"
        id={field}
        name={field}
        value={formValue}
        onChange={changeFunction}
        placeholder={placeHolder}
        required
        style={{ minHeight: "100px", color: "black" }}
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
        style={{ color: "black" }}
        required
      />
    )}
  </div>
);

export default FormGroup;
