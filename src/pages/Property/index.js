import React, { useState } from "react";
import PropertyTemplate from "./Property.template";
import { PROPERTY, TITLE } from "./Property.config";
import { connect } from "react-redux";
import { addProperty } from "redux/actions/Type.action";

const PropertyPage = (props) => {
  const [inputs, setInputs] = useState([0]);
  const [isLoadin, setIsloading] = useState(false);
  const hanleClickPlus = () => {
    inputs.push(0);
    setInputs([...inputs]);
  };
  const handleSubmit = async (e) => {
    const { addProperty } = props;
    try {
      setIsloading(true);
      e.preventDefault();
      let properties = {};
      const form = new FormData(e.target);
      const data = Object.fromEntries(form);
      for (let key in data) {
        let searchkey = key.search(PROPERTY);
        if (searchkey > -1) {
          properties[key] = data[key];
        }
      }
      const sendData = {
        title: data[TITLE],
        properties,
      };
      const result = await addProperty(sendData);
      console.log("result", result);
      const inputs = [0];
      setInputs([...inputs]);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <PropertyTemplate
      {...props}
      onClickPlus={hanleClickPlus}
      inputs={inputs}
      onSubmit={handleSubmit}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProperty: (data) => dispatch(addProperty(data)),
});

const Property = connect(null, mapDispatchToProps)(PropertyPage);

export { Property };
