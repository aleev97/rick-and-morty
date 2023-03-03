import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allcharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: action.payload,
                allcharacters: action.payload,
            }

        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: action.payload,
            }

        case FILTER:

            const allcharsfiltered = state.allcharacters.filter(char => char.gender === action.payload);
            return {
                ...state,
                myFavorites: allcharsfiltered
            }

        case ORDER:

            return {
                ...state,
                myFavorites: action.payload === "Ascendente"
                    ? state.allcharacters.sort((a, b) => a.id - b.id)
                    : state.allcharacters.sort((a, b) => b.id - a.id)
            }

        default:
            return { ...state }
    }
}

export default reducer;