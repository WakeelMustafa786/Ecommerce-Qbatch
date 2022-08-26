const { createSlice } = require('@reduxjs/toolkit')
const initialState = []
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            console.log('action.payload', action.payload);
            state.push(action.payload);
        },
        remove(state, action) {
         return(
       state.filter((e) =>
                e.title !== action.payload
            ));
            // console.log('after removing', state);
        },
    },



});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;