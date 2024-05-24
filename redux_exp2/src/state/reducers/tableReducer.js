const initialState = {
    1:{name:"Hiren", email:"hiren@gmail.com", mobile:"9587952756", dob:"2000-11-11"},
    2:{name:"Raj", email:"raj@gmail.com", mobile:"958982756", dob:"2002-01-05"},
    3:{name:"Vijay", email:"vijay@gmail.com", mobile:"96657952756", dob:"1998-01-22"},
}


const addUserReducer = (state, action) => {
    state = {...state,[action.id + 1]:action.payload}
    return state
}

const editUserReducer = (state, action) => {
    state = {...state,[action.id]:action.payload}
    return state;
}

const removeUserReducer = (state, action) => {
    const { [action.payload]: removed, ...newState } = state;
    return newState;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return addUserReducer(state, action);
        case "edit":
            return editUserReducer(state, action);
        case "remove":
            return removeUserReducer(state, action);
        default:
            return state;
    }
}

export default reducer