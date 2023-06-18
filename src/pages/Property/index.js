import React, { useEffect, useState } from "react";
import PropertyTemplate from "./Property.template";
import { PROPERTY, TITLE } from "./Property.config";
import { connect } from "react-redux";
import { addProperty, getProperties } from "redux/actions/Type.action";

const PropertyPage = (props) => {
  const [inputs, setInputs] = useState([0]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [dataGrid, setDataGrid] = useState({
    loading: true,
    totalRows: 200,
    pageSize: 10,
    page: 1,
  });
  useEffect(() => {
    init();
  }, []);
  const hanleClickPlus = () => {
    inputs.push(0);
    setInputs([...inputs]);
  };

  const init = async () => {
    const { getProperties } = props;
    try {
      const result = await getProperties();
      const columns = [{ field: TITLE, headerName: "عنوان", width: 150 }];
      const rows = result.data.map((item) => {
        return {
          [TITLE]: item?.title,
          id: item?.id,
        };
      });
      setColumns(columns);
      setRows(rows);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleSubmit = async (e) => {
    const { addProperty } = props;
    try {
      setLoading(true);
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
      init();
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PropertyTemplate
      {...props}
      onClickPlus={hanleClickPlus}
      inputs={inputs}
      onSubmit={handleSubmit}
      loading={loading}
      columns={columns}
      rows={rows}
      dataGrid={dataGrid}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProperty: (data) => dispatch(addProperty(data)),
  getProperties: () => dispatch(getProperties()),
});

const Property = connect(null, mapDispatchToProps)(PropertyPage);

export { Property };
