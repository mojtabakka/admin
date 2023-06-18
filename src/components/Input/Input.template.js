import React from "react";

const InputTemplate = ({
  value,
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
    <div className="py-2 inline-block ">
      {type !== "checkbox" ? (
        <>
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
        </>
      ) : (
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type={type}
            value={value}
            onChange={(e) => onChange(e)}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm mx-3 font-medium text-gray-900 dark:text-gray-300"
          >
            {label}
          </label>
        </div>
      )}
    </div>
  );
};

export default InputTemplate;
