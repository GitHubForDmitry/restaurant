import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

function ModalContent(props) {
  const {
    handleChangeImage,
    setDishName,
    setDescription,
    setDishType,
    setKcl,
    setDishPrice,
    setPersonsPerDish,
    dishImage,
    dishName,
    dishDescription,
    dishType,
    kcl,
    dishPrice,
    personsPerDish,
    ingredient,
    setIngredient,
    addIngredientCard,
    addPreparedCard,
    dataIngredient,
    totalKcl,
    removeIngredient
  } = useContext(AppContext);
  console.log(dataIngredient);

  return (
    <div>
      <div style={{ backgroundImage: `url(${dishImage})` }}>
        <h1>{dishName !== "" ? dishName : "Add a new dish"}</h1>
        <p>
          {dishDescription !== ""
            ? dishDescription
            : "Please enter all informations about your new dish"}
        </p>
        <label
          style={{
            minWidth: 150,
            maxWidth: 300,
            backgroundColor: "orange",
            cursor: "pointer"
          }}
          htmlFor="imageButton"
        >
          {dishImage !== "" ? "Change photo" : "Add photo"}
          <input
            type="file"
            onChange={handleChangeImage}
            id="imageButton"
            style={{ display: "none" }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="dish">
          <input
            type="text"
            placeholder="Dish name"
            id="dish"
            value={dishName}
            onChange={text => setDishName(text.target.value)}
          />
        </label>
        <label htmlFor="dishSelect">
          <select
            name="dishSelect"
            id="dishSelect"
            value={dishType}
            onChange={text => setDishType(text.target.value)}
          >
            <option value="Select a dish category">
              Select a dish category
            </option>
            <option value="Meat">Meat</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Drinks">Drinks</option>
          </select>
        </label>
        <label htmlFor="areaDish">
          <textarea
            name="areaDish"
            id="areaDish"
            placeholder="Dish description"
            value={dishDescription}
            onChange={text => setDescription(text.target.value)}
          />
        </label>
      </div>
      <div>
        <p>Ingredients</p>
        <button onClick={addIngredientCard}>Add new ingredient +</button>
        <label htmlFor="ingredient">
          <input
            type="text"
            placeholder="Ingredient name"
            id="ingredient"
            value={ingredient}
            onChange={text => setIngredient(text.target.value)}
          />
        </label>
        <label htmlFor="kcl">
          <input
            type="number"
            placeholder="Weight (Kcl)"
            id="kcl"
            value={kcl}
            onChange={text => setKcl(text.target.value)}
          />
        </label>
        <div>
          {dataIngredient &&
            dataIngredient.map((ingredient, index) => (
              <div key={index}>
                <p>{ingredient.ingredient}</p>
                <p>{ingredient.kcl}</p>
                <button onClick={() => removeIngredient(ingredient.id)}>removeIngredient</button>
              </div>

            ))}
          <p>{totalKcl.lengthIngredients} Ingredients in your dish</p>
          <p>{totalKcl.total} calories</p>
        </div>
      </div>
      <div>
        <button onClick={addPreparedCard}>addPreparedCard</button>
      </div>
    </div>
  );
}

export default ModalContent;
