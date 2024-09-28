import React from "react";
import {useSelector} from "react-redux";
import Container from "../../layout/Container/Container.jsx";
import ModalMovies from "../../composition/Movies/components/ModalMovies/ModalMovies.jsx";


import {selectorFavoriteList} from "../../store/selectors.js";

import './FavoritePage.scss'
const FavoritePage = () => {
	const favoriteList = useSelector(selectorFavoriteList)
	
  return (
	  <div className="page-wrapper">
		  <Container>
			  <div className="posters-wrapper">
				  {favoriteList.map((post) => <div>{post.title ? post.title : post.name }</div>)}
				  {/*<PosterCard/>*/}
			  </div>
			  <ModalMovies/>
		  </Container>
	  </div>
  )
}

export default FavoritePage