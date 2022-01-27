import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface IBaseClickState {
  totalClicks: number
}

// Define the initial state using that type
const initialState: IBaseClickState = {
  totalClicks: 0,
}

const incrementFunc = (state: IBaseClickState) => {
  console.log('increment func!')
  state.totalClicks += 1;
};

export const baseClickSlice = createSlice({
  name: 'baseClick',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: incrementFunc,
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.totalClicks += action.payload
    },
  },
})

export const { increment, incrementByAmount } = baseClickSlice.actions;

export default baseClickSlice.reducer;
