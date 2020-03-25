import React, { useEffect, useReducer, useState } from "react";

const AppContext = React.createContext();
const cardReducer = (state, action) => {
  switch (action.type) {
    case "delete_card":
      return state.filter(card => card.id !== action.payload);
    case "add_card":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
          image: action.payload.image,
          description: action.payload.description
        }
      ];
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {

  return (
    <AppContext.Provider
      value={{

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

export { AppProvider };
