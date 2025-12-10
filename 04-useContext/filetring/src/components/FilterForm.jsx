import React from "react";
import "./FilterForm.css";

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
        <input name="id" id="id" onChange={handlechange} />
      </th>
      <th>
        <input
          name="TeljesNev"
          id="TeljesNev"
          placeholder="Teljes név..."
          onChange={handlechange}
        />
      </th>
      <th className="szuletesiDatum">
        <input type="number" name="ev" id="ev" onChange={handlechange} placeholder="év" />
        <input type="number" name="honap" id="honap" onChange={handlechange} placeholder="hónap" />
        <input type="number" name="nap" id="nap" onChange={handlechange} placeholder="nap" />

      </th>
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
