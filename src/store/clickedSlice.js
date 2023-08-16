import {createSlice} from '@reduxjs/toolkit';

const initialStateValue ={
    Clicked: true,
}

export const isClickedReducer = createSlice({
    name: 'ClickedStatus',
    initialState:{ value: initialStateValue},
    reducer: {
        uponClick: (state, action) => {
            state.Clicked = action.payload;
        },
        // getData: (state, action) => {
        //     state.value = action.payload;
        //   },
    },
})

export const {uponClick} = isClickedReducer.actions;
export default isClickedReducer.reducer;