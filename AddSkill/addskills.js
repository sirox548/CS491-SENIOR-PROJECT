import React from "react";
import Select from "react-select";

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: "1px dotted pink",
    color: state.selectProps.menuColor,
    padding: 20,
    backgroundColor: "#F0FFFF",
  }),

  control: (_, { selectProps: { width } }) => ({
    width: width,
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

function AddSKills({ style, label, options, onChange, defaultValue, isMulti }) {
  return (
    <div style={style}>
      <h1>{label}</h1>
      <Select
        styles={customStyles}
        isMulti={isMulti}
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default AddSKills;
