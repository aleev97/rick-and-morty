import { ADD_FAVORITE, DELETE_FAVORITE,FILTER, ORDER } from "./action-types";

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

export function filterCards(status) {
    return {
        type: FILTER,
        payload: status
    }    
};

export function orderCards(id) {
    return {
        type: ORDER,
        payload: id
    }    
};