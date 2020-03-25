import { ADD_DISH, ADD_INGREDIENT, DELETE_INGREDIENT } from "./types";

export const cardReducer = (state, action) => {
    switch (action.type) {
        case ADD_DISH:
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 9999),
                    image: action.payload.image,
                    name: action.payload.name,
                    description: action.payload.description,
                    type: action.payload.type,
                    price: action.payload.price,
                    persons: action.payload.persons
                }
            ];
        default:
            return state;
    }
};

export const ingredientReducer = (state, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 9999),
                    ingredient: action.payload.ingredient,
                    kcl: action.payload.kcl
                }
            ];
        case DELETE_INGREDIENT:
            return state.filter(ingredient => ingredient.id !== action.payload);
        default:
            return state;
    }
};