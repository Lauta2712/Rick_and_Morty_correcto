import axios from "axios"
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = (character) => {  
    return async function (dispatch){
        try {
            await axios.post("http://localhost:3001/rickandmorty/favs", character)
            .then(response => {
                return dispatch(
                    {type: ADD_FAVORITE, payload: response.data}
                )
            })
        } catch (error) {
            console.log('Estoy roto :( ');
        }
    }
};

export const removeFavorite = (id) => {
    return async function (dispatch) {
        try {
            await axios.delete(`http://localhost:3001/rickandmorty/favs/${id}`)
            .then(response => {
                return dispatch(
                    { type: REMOVE_FAVORITE, payload: response.data }
                )
            })
        } catch (error) {
            console.log('Estoy roto :( ');
        }
    }
};