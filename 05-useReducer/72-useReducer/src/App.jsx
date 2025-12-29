import { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const FormWithReducer = () => {
  const [formData, dispatch] = useReducer(formReducer, { name: "", email: "" });

  const handleChange = (e) => {
    dispatch({ name: e.target.name, value: e.target.value });
  };

  return (
    <form>
      <label>Név:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <p>Név: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </form>
  );
};

export default FormWithReducer;
