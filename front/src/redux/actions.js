import { ADD_FAVORITE, DELETE_FAVORITE,FILTER, ORDER } from "./action-types";
import axios from "axios"


export function addFavorite(char){
    return function(dispatch){
      axios
        .post("http://localhost:3001/favs/create", char)
        .then((response)=> {
          return dispatch({
              type: ADD_FAVORITE,
              payload: response.data,
          });
        });
    };
  }

export function deleteFavorite(id) {
    return function (dispatch) {
        axios
            .delete("http://localhost:3001/favs/delete/" + id)
            .then((response) => {
                return dispatch({
                    type: DELETE_FAVORITE,
                    payload: response.data,
                });
            })
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