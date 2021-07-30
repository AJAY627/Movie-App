import { ADD_MOVIES } from '../actions'

const initialMoviesState = {
    list: [],
    Favourites: []
}

export default function movies(state=initialMoviesState, action){
    if(action.type === ADD_MOVIES) {
       
        // return action.movies;
     return {
        ...state,
        list: action.movies
     }
      
    }
    return state;
}