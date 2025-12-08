const DataType = (adat) => {
  let type = null;
  if (typeof adat === "boolean") {
    type = "Boolean";
  } else if (typeof adat === "number") {
    if (Number.isInteger(adat)) {
      type = "Integer";
    } else {
      type = "Float";
    }
  } else if (Date.parse(adat)) {
    type = "Date";
  } else {
    type = "String";
  }

  return type;
};
export default DataType;
