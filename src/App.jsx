import React, {useEffect} from "react";
import Footer from "./components/Footer/Footer.jsx";
import Header from  "./components/Header/Header.jsx";
import './styles/styles.scss'
// import {useSelector, useDispatch} from 'react-redux'
// import {fetchTvSliderCards} from './store/slices/tv.slice.js'
// import {fetchCinemaSliderCards} from './store/slices/cinema.slice.js'
import RootRoters from './routers/index.jsx'


function App() {
    // const rootState = useSelector((state) => state) // функція яка дістане весь глобальний стор
    // const tvCards = useSelector((state) => state.tv.sliderCards) //Функція яка дістане массів карток по ТВ
    // const dispatch = useDispatch() // Ініциалізація useDispatch, зробити инстанс(або зробити креате функці)

    // console.log('rootState',rootState);
    // console.log('tvCards',tvCards);
    

    // useEffect(()=>{
    //     dispatch(fetchTvSliderCards()) // функція диспатч це посередник між редакс стором і відповідю від бекенда => далі робимо запит функцією fetchTvSliderCards()
    //     dispatch(fetchCinemaSliderCards()) // функція диспатч це посередник між редакс стором і відповідю від бекенда => далі робимо запит функцією fetchCinemaSliderCards()
    // }, [])


	return (
        <div className="g-app">
            <Header/>
            <main className="g-content">
                <RootRoters/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
