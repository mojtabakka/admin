import React from "react";

const InputTemplate = ({
  type = "text",
  onChange,
  onKeyDown,
  onKeyUp,
  name,
  defaultValue,
  id,
  placeholder,
  label,
  className,
  tabIndex,
}) => {
  return (
    <div className="py-2">
      <span className="px-3">{label} </span>
      <input
        className={`${
          type !== "password" ? "p-2" : "px-2"
        } border bg-slate-100 rounded-2xl  text-sm text-gray-500 ${className}  `}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        type={type}
        name={name}
        defaultValue={defaultValue}
        id={id}
        placeholder={placeholder}
        tabIndex={tabIndex}
      />
    </div>
  );
};

export default InputTemplate;
