// Define your initial state
const initialState = [];

// Reducer function to handle adding an item to the cart
const addItemReducer = (state, action) => {
    return [...state, action.payload]
};

// Reducer function to handle removing an item from the cart
const removeItemReducer = (state, action) => {
    // return state.filter(item => item !== action.payload)
    const index = state.indexOf(action.payload); // Find the index of the item

    if (index !== -1) {
        state = state.slice(0, index).concat(state.slice(index + 1));
    }
    return state
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return addItemReducer(state, action);
        case "remove":
            return removeItemReducer(state, action);
        default:
            return state;
    }
}

export default reducer