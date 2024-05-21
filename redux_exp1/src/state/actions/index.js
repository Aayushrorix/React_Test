export const addItem = (item) => {
    return (dispatch)=>{
        dispatch({
            type:"add",
            payload:item
        })
    };
}

export const removeItem = (item) => {
    return (dispatch)=>{
        dispatch({
            type:"remove",
            payload:item
        })
    };
}