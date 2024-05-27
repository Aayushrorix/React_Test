export const userEntry = (user) => {
    return (dispatch)=>{
        dispatch({
            type:"add",
            payload:user
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

