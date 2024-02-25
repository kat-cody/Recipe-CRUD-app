// RecipeCreate.js
import React, { useState } from "react";

const RecipeCreate = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    // Optionally, you can reset the form after submission
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Recipe Name"
      />
      <input
        type="text"
        name="cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        placeholder="Cuisine"
      />
      <input
        type="text"
        name="photo"
        value={formData.photo}
        onChange={handleChange}
        placeholder="Photo URL"
      />
      <textarea
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        placeholder="Ingredients"
      />
      <textarea
        name="preparation"
        value={formData.preparation}
        onChange={handleChange}
        placeholder="Preparation Instructions"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RecipeCreate;
