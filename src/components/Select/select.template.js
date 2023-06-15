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

const selectTemplate = ({ name, label, onChange, loading, options,isMulti }) => {
  return (
    <>
      <span className="px-2">{label}</span>
      <Select
        options={options}
        styles={colourStyles}
        className=" inline-block w-56"
        name={name}
        onChange={onChange}
        isLoading={loading}
        isMulti={isMulti}
      />
    </>
  );
};

export default selectTemplate;
