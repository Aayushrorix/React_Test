const cc = 3

const countIncr = (state, action) => {
    state = action.payload + 1
    return state
}

const countDecr = (state, action) => {
    state = action.payload - 1
    return state
}

const currentCountReducer = (state = cc, action) => {
    switch (action.type) {
        case "ccincr":
            return countIncr(state, action);
            case "ccdecr":
                return countDecr(state, action);
        default:
            return state;
    }
};

export default currentCountReducer;