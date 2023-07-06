import React from "react";
import Select from "react-select";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

const dot = (color = "transparent") => ({
  color: "red",
});
const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#F1F5F9",
    borderRadius: 18,
  }),
  input: (styles) => ({ ...styles, ...dot() }),
};

const selectTemplate = ({
  name,
  label,
  onChange,
  loading,
  options,
  isMulti,
  value,
  defaultValue,
  className
}) => {
  return (
    <>
      <div className="px-2 my-1">{label}</div>
      <Select
        classNames={className}
        defaultValue={defaultValue}
        options={options}
        styles={colourStyles}
        className=" inline-block w-56"
        name={name}
        onChange={onChange}
        isLoading={loading}
        isMulti={isMulti}
        value={value}
      />
    </>
  );
};

export default selectTemplate;
