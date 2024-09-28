import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	favoriteList: [],
}


const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		actionFavoriteList: (state, {payload}) => {
			if(!state.favoriteList.some((item) => item.id === payload.id)){
				state.favoriteList = [...state.favoriteList,payload]
			} else  {
				state.favoriteList = state.favoriteList.filter((item) => item.id !== payload.id)
			}
		},
		actionDeleteFavoriteItem: (state, {payload}) => {
			state.favoriteList = state.favoriteList.filter((item) => item.id !== payload.id)
		}
	},
})

export const {actionFavoriteList,actionDeleteFavoriteItem} = appSlice.actions

export default appSlice.reducer