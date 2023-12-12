import { createSlice } from "@reduxjs/toolkit"

export interface burgerInitialState {
  active: boolean
}

const initialState: burgerInitialState = {
  active: false,
}

export const burgerMenuSlice = createSlice({
	name: 'burgerMenu',
	initialState,
	reducers: {
		toggleState: (state) => {
			state.active = !state.active
		}
	}
})

export const { toggleState } =  burgerMenuSlice.actions
export default burgerMenuSlice.reducer