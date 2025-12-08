import React from "react";
const FilterForm = ({ filters, setFilters }) => {
  const handlechange = (e) => {
    const { name, value, type, checked } = e.target;

    setFilters((filters) => ({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <th>
        <input name="id" onChange={handlechange} />
      </th>
      <th>
        <input
          name="TeljesNev"
          placeholder="Teljes név..."
          onChange={handlechange}
        />
      </th>
      <th></th>
      <th>
        <input name="Magassag" onChange={handlechange} />
      </th>
      <th>
        <input name="Gyerekek" onChange={handlechange} />
      </th>
      <th>
        <input type="checkbox" name="Hirlevel" onChange={handlechange} />
      </th>
    </>
  );
};

export default FilterForm;
