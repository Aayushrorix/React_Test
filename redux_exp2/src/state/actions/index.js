export const userEntry = (user,id) => {
    return (dispatch)=>{
        dispatch({
            type:"add",
            payload:user,
            id:id
        })
    };
}

export const userEdit = (id,user) => {
    return (dispatch)=>{
        dispatch({
            type:"edit",
            payload:user,
            id:id
        })
    };
}

export const userRemove = (uid) => {
    return (dispatch)=>{
        dispatch({
            type:"remove",
            payload:uid
        })
    };
}

export const countIncrement = (cc) => {
    return (dispatch)=>{
        dispatch({
            type:"ccincr",
            payload:cc
        })
    };
}

export const countDecrement = (cc) => {
    return (dispatch)=>{
        dispatch({
            type:"ccdecr",
            payload:cc
        })
    };
}