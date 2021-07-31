// // {
//     type: "ADD_MOVIES";
//     MOVIES: [M1, M2, M3]
// }
// {
//     type: 'DECEASE_COUNT'
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';

//action creaters
export function addMovies(movies) {
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}
export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie:movie
    }
}