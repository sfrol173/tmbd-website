import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {sendRequest} from '../../helpers/sendRequest'
import {API_KEY_3, API_URL} from '../../configs/API'



const initialState = {
    sliderCards: [],
    page: {}
}

export const actionFetchCinemaSliderCards = createAsyncThunk(
    'cinema/fetchSliderCards',
    async () => {
        const data = await sendRequest (`${API_URL}/discover/movie?api_key=${API_KEY_3}`)

        return data.results // [{}, {} ,........]
    }
)

export const actionFetchCinemaPage = createAsyncThunk(
    "cinema/fetchPage",
    async (id) => {
        const date = await sendRequest (`${API_URL}/movie/${id}?api_key=${API_KEY_3}`)
        
        const {
            backdrop_path,
            poster_path,
            original_title,
            title,
            genres,
            runtime,
            overview,
            release_date
        } = date
        
        return {
            backdrop_path,
            poster_path,
            original_title,
            title,
            genres,
            runtime,
            overview,
            release_date
        }
    }
)

const cinemaSlice = createSlice({
    name: 'cinema',
    initialState,
    reducers: {
        actionCinemaSliderCards: (state, action) => { //  action => {} => {type,payload} => type - назва нашої функції(tvSliderCards) payload- це данні які ми передаємо в нашу функцію
            state.sliderCards = [...action.payload]
        },
        actionCinemaPage: (state, {payload}) => { //  action => {} => {type,payload} => type - назва нашої функції(tvSliderCards) payload- це данні які ми передаємо в нашу функцію
            state.page = payload
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(actionFetchCinemaSliderCards.fulfilled, (state, action) => {
                state.sliderCards = [...action.payload]
            })
            .addCase(actionFetchCinemaPage.fulfilled, (state, {payload}) => {
                state.page = {payload}
            })
    }

})
export const {actionCinemaSliderCards,actionCinemaPage} = cinemaSlice.actions

export default cinemaSlice.reducer

// tvSliderCards(payload) payload === [{},{},{},{},{}]