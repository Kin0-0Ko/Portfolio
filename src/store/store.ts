import {combineReducers, configureStore} from '@reduxjs/toolkit'
const rootReduser = combineReducers({
})

export const setupSore = () => {
	return configureStore({
		reducer: rootReduser
		
	})
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupSore>
export type AppDistpatch = AppStore['dispatch']

