import React from "react";
import {Route, Routes} from 'react-router-dom'
import HomePage from "../pages/HomePage/HomePage";
import FavoritePage from "../pages/FavoritePage/FavoritePage";
import TvPage from "../pages/TvPage/TvPage.jsx";


export default () => {
	return (
		<Routes>
			<Route index element={<HomePage/>}/>
			<Route path="/favorite" element={<FavoritePage/>}/>
			<Route path="/tv/:id" element={<TvPage/>}/>
		</Routes>
	)
}