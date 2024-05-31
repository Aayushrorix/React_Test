import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


// create action
export const createUser = createAsyncThunk("createUser", async(data, {rejectWithValue}) => {

    const response = await fetch("https://6656ba529f970b3b36c64b09.mockapi.io/crud", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json()
        console.log(result)
        return result
    } catch (error){
        return rejectWithValue(error)
    }
})

// create action
export const showUser = createAsyncThunk("showUser", async(_, {rejectWithValue}) => {

    const response = await fetch("https://6656ba529f970b3b36c64b09.mockapi.io/crud");

    try {
        const result = await response.json()
        console.log(result)
        return result
    } catch (error){
        return rejectWithValue(error)
    }
})

const userDetails = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(createUser.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(createUser.fulfilled, (state,action) => {
            state.loading = false;
            state.users.push(action.payload)
        })
        .addCase(createUser.rejected, (state,action) => {
            state.loading = false;
            state.users= action.payload
        })
        .addCase(showUser.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(showUser.fulfilled, (state,action) => {
            state.loading = false;
            state.users = action.payload
        })
        .addCase(showUser.rejected, (state,action) => {
            state.loading = false;
            state.users= action.payload
        })
    }
    
})

export default userDetails.reducer;