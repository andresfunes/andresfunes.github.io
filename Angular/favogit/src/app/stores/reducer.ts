export const initialState = [];

export function favourites(state = initialState, action) {
    switch (action.type) {
        case 'Add':
            return [...state, action.payload];
        case 'Remove':
            return state.filter(favourite => favourite.id !== action.payload.id);
        case 'Reset':
            return [];
        default:
            return state;
    }
}