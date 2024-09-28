import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import {Scrollbar} from 'swiper/modules';
import "swiper/css"
import 'swiper/css/scrollbar';

import MovieItem from './components/MovieItem/MovieItem';
import ModalMovies from "./components/ModalMovies/ModalMovies.jsx";

import {IMG_URL} from "../../configs/API.js";
import {actionFetchTvSliderCards} from '../../store/slices/tv.slice';
import {actionFetchCinemaSliderCards} from '../../store/slices/cinema.slice';
import {actionFavoriteList} from "../../store/slices/app.slice.js";
import {selectorFavoriteList,selectorTvCards,selectorCinemaCards} from "../../store/selectors.js";

import LeftArrowIcon from './icons/leftArrow.svg?react';

import './Movies.scss';

const Movies = () => {
	const [activePost, setActivePost] = useState({});
	const [isModal, setIsModal] = useState(false);
	
	const tvCards = useSelector(selectorTvCards)
	const cinemaCards = useSelector(selectorCinemaCards)
	const favoriteList = useSelector(selectorFavoriteList)
	const dispatch = useDispatch()
	
	const isDelete = favoriteList.some((item) => item.id === activePost.id)
	console.log('favoriteList',favoriteList);
	
	const handleModal = () => {
		setIsModal(!isModal)
	}
	const handleAddPost = (post) => {
		dispatch(actionFavoriteList(post))
	}
	
	const handleActivePost = (post) => {
		setActivePost(post)
		handleModal()
	}
	
	useEffect(() => {
		dispatch(actionFetchTvSliderCards()) // функція диспатч це посередник між редакс стором і відповідю від бекенда => далі робимо запит функцією fetchTvSliderCards()
		dispatch(actionFetchCinemaSliderCards()) // функція диспатч це посередник між редакс стором і відповідю від бекенда => далі робимо запит функцією fetchCinemaSliderCards()
	}, [])
	
	return (
		<div className="films__container">
			<div className="films__section">
				<div className="films__title">Популярне По TV</div>
				<div className="films__slider">
					<Swiper
						slidesPerView={5}
						spaceBetween={16}
						className="films__wrapper"
						navigation={true}
						grabCursor={false}
						draggable={false}
						preventClicksPropagation={true}
						preventClicks={true}
						scrollbar={{draggable: false, hide: true}}
						slideToClickedSlide={false}
						pagination={{clickable: true}}
						modules={[Scrollbar]}
					>
						{
							tvCards.map((item) => (
								<SwiperSlide key={item.id} className="film__item">
									<MovieItem
										title={item.name}
										posterPath={item.poster_path}
										originalTitle={item.original_name}
										overView={item.overview}
										linkPath={`/tv/${item.id}`}
										// onClick={() => handleActivePost({posterPath:item.poster_path, title:item.name, originalTitle:item.original_name, overView:item.overview, linkPath:`/tv/${item.id}`})}
										onClick={() => handleActivePost(item)}
									/>
								</SwiperSlide>
							))
						}
					
					</Swiper>
					<div className="films__section__navigation">
						<p className="film__link">
							<Link to="/tv/all" className="link">Усі TV</Link>
							<LeftArrowIcon/>
						</p>
					</div>
				</div>
			</div>
			<div className="films__section">
				<div className="films__title">Популярне У кінотеатрах</div>
				<div className="films__slider">
					<Swiper
						slidesPerView={5}
						spaceBetween={16}
						className="films__wrapper"
						navigation={true}
						grabCursor={false}
						draggable={false}
						preventClicksPropagation={true}
						preventClicks={true}
						scrollbar={{draggable: false, hide: true}}
						slideToClickedSlide={false}
						pagination={{clickable: true}}
						modules={[Scrollbar]}
					>
						
						{
							cinemaCards.map((item) => (
								<SwiperSlide key={item.id} className="film__item">
									<MovieItem
										title={item.title}
										posterPath={item.poster_path}
										originalTitle={item.original_title}
										overView={item.overview}
										linkPath={`/cinema/${item.id}`}
										onClick={() => handleActivePost(item)}
									/>
								</SwiperSlide>
							))
						}
					</Swiper>
					<div className="films__section__navigation">
						<p className="film__link">
							<Link to="/cinema/all" className="link">Усі Cinemas</Link>
							<LeftArrowIcon/>
						</p>
					</div>
				</div>
			</div>
			<ModalMovies
				isOpen={isModal}
				onClose={handleModal}
				img={`${IMG_URL}${activePost.poster_path}`}
				title={activePost.title ? activePost.title : activePost.name}
				subTitle={activePost.original_title ? activePost.original_title : activePost.original_name}
				desc={activePost.overview}
				onClick={() => handleAddPost(activePost)}
				isDelete={isDelete}
			/>
		</div>
	)
}


export default Movies