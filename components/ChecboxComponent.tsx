import React from "react";
import { Checkbox } from "antd";

function onChange(checkedValues: any) {
  console.log("checked = ", checkedValues);
}

const ChecboxComponent = () => {
  const plainOptions = ["Apple", "Pear", "Orange"];
  const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
  ];
  const optionsWithDisabled = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange", disabled: false },
  ];
  return (
    <>
      <Checkbox.Group
        options={plainOptions}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
      <br />
      <br />
      <Checkbox.Group
        options={options}
        defaultValue={["Pear"]}
        onChange={onChange}
      />
      <br />
      <br />
      <Checkbox.Group
        options={optionsWithDisabled}
        disabled
        defaultValue={["Apple"]}
        onChange={onChange}
      />
    </>
  );
};

export default ChecboxComponent;
