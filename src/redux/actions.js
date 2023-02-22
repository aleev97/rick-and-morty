import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";

export function addFavorite(char){
    return{
        type: ADD_FAVORITE,
        payload:char
    }
};

export function deleteFavorite(id){
    return{
        type: DELETE_FAVORITE,
        payload:id
    }
};