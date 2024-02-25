// App.js
import React, { useState } from "react";
import RecipeData from "./RecipeData";

const App = () => {
  const [recipes, setRecipes] = useState(RecipeData);
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name: formData.name,
      cuisine: formData.cuisine,
      photo: formData.photo,
      ingredients: formData.ingredients,
      preparation: formData.preparation
    };
    setRecipes([...recipes, newRecipe]);
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  };

  const handleDelete = (index) => {
    const newRecipes = [...recipes];
    newRecipes.splice(index, 1);
    setRecipes(newRecipes);
  };

  return (
    <div>
      <form name="create" onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Recipe Name"
        />
        <input
          name="cuisine"
          value={formData.cuisine}
          onChange={handleInputChange}
          placeholder="Cuisine"
        />
        <input
          name="photo"
          value={formData.photo}
          onChange={handleInputChange}
          placeholder="Photo URL"
        />
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleInputChange}
          placeholder="Ingredients"
        />
        <textarea
          name="preparation"
          value={formData.preparation}
          onChange={handleInputChange}
          placeholder="Preparation Instructions"
        />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td><img src={recipe.photo} alt={recipe.name} /></td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.preparation}</td>
              <td>
                <button name="delete" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
