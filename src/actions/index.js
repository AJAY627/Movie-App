// // {
//     type: "ADD_MOVIES";
//     MOVIES: [M1, M2, M3]
// }
// {
//     type: 'DECEASE_COUNT'
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';


//action creaters
export function addMovies (movies) {
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}