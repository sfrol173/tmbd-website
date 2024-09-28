import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {sendRequest} from '../../helpers/sendRequest'
import {API_KEY_3, API_URL} from '../../configs/API'



const initialState = {
    sliderCards: [],
    page: {}
}

export const actionFetchTvSliderCards = createAsyncThunk(
    'tv/fetchSliderCards',
    async () => {
        const data = await sendRequest (`${API_URL}/discover/tv?api_key=${API_KEY_3}`)

        return data.results // [{}, {} ,........]
    }
)

export const  actionFetchTvPage = createAsyncThunk(
    'tv/fetchPage',
    async (id) => {
        const data = await sendRequest (`${API_URL}/tv/${id}?api_key=${API_KEY_3}`)
        const {
            backdrop_path,
            poster_path,
            name,
            original_name,
            release_date,
            runtime,
            genres,
            episode_run_time,
            overview,
            created_by,
            seasons,
            last_episode_to_air,
            next_episode_to_air
        } = data
        
        return {
            backdrop_path,
            poster_path,
            name,
            original_name,
            release_date,
            runtime,
            genres,
            episode_run_time,
            overview,
            created_by,
            seasons,
            last_episode_to_air,
            next_episode_to_air
        }
    }
)

const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers: {
        actionTvSliderCards: (state, action) => { //  action => {} => {type,payload} => type - назва нашої функції(tvSliderCards) payload- це данні які ми передаємо в нашу функцію
            state.sliderCards = [...action.payload]
        },
        actionTvPage: (state, {payload}) => { //  action => {} => {type,payload} => type - назва нашої функції(tvSliderCards) payload- це данні які ми передаємо в нашу функцію
            state.page = payload
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(actionFetchTvSliderCards.fulfilled, (state, action) => {
                state.sliderCards = [...action.payload]
            })
            .addCase(actionFetchTvPage.fulfilled, (state, {payload}) => {
                state.page = payload
            })
    }
})

export const {actionTvSliderCards, actionTvPage} = tvSlice.actions

export default tvSlice.reducer

// tvSliderCards(payload) payload === [{},{},{},{},{}]