import React, { useEffect, useReducer, useState } from "react";
import { cardReducer, ingredientReducer } from "./reducers";
import { ADD_DISH, ADD_INGREDIENT, DELETE_INGREDIENT } from "./types";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInnerModalOpen] = useState(false);
  const [dishImage, setDishImage] = useState("");
  const [dishName, setDishName] = useState("");
  const [dishDescription, setDescription] = useState("");
  const [dishType, setDishType] = useState("");
  const [kcl, setKcl] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [personsPerDish, setPersonsPerDish] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [totalKcl, setTotalKcl] = useState({});
  const [cardList, dispatch] = useReducer(cardReducer, []);
  const [ingredientList, dispatchIngredient] = useReducer(
    ingredientReducer,
    []
  );
  const [buttonAddDish, setButtonAddDish] = useState(false);

  const addCard = (image, name, description, type, kcl, price, persons) => {
    dispatch({
      type: ADD_DISH,
      payload: {
        image,
        name,
        description,
        type,
        kcl,
        price,
        persons
      }
    });
  };
  const deleteIngredient = id => {
    dispatchIngredient({ type: DELETE_INGREDIENT, payload: id });
  };

  const addIngredient = (ingredient, kcl) => {
    dispatchIngredient({
      type: ADD_INGREDIENT,
      payload: {
        ingredient,
        kcl
      }
    });
  };
  const handleChangeImage = e => {
    e.preventDefault();
    try {
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        setDishImage(reader.result);
      };
      reader.readAsDataURL(file);
    } catch (e) {
      console.log(e.message);
    } finally {
      setDishImage("");
    }
  };

  const addPreparedCard = () => {
    addCard(
      dishImage,
      dishName,
      dishDescription,
      dishType,
      totalKcl.total,
      dishPrice,
      personsPerDish
    );
  };
  const addIngredientCard = () => {
    addIngredient(ingredient, kcl);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const removeIngredient = id => {
    deleteIngredient(id);
  };

  useEffect(() => {
    return () => setDishImage("");
  }, []);
  useEffect(() => {}, [cardList]);
  useEffect(() => {
    if (ingredientList.length) {
      setTotalKcl({
        total: ingredientList
          .map(kclTotal => kclTotal.kcl)
          .reduce(
            (prev, next) => {
              return +prev + +next;
            },
            [0]
          ),
        lengthIngredients: ingredientList && ingredientList.length
      });
    }
  }, [ingredientList]);

  useEffect(() => {
    if (dishName !== "" && dishDescription !== "" && dishImage !== "") {
      setButtonAddDish(true);
    } else setButtonAddDish(false)
  }, [buttonAddDish, dishName, dishDescription, dishImage]);
  return (
    <AppContext.Provider
      value={{
        filter,
        setFilter,
        isModalOpen,
        isInnerModalOpen,
        setDishImage,
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
        openModal,
        closeModal,
        data: cardList,
        dataIngredient: ingredientList,
        addIngredientCard,
        totalKcl,
        removeIngredient,
        handleChangeImage,
        addPreparedCard,
        buttonAddDish
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

export { AppProvider };
