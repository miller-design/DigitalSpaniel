import { configureStore } from "@reduxjs/toolkit"
import burgerMenuSlice from '../slices/burgerMenuSlice'

export function makeStore() {
	return configureStore({
		reducer: {
			burgerMenu: burgerMenuSlice
		}
	})
}

export const store = makeStore()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch