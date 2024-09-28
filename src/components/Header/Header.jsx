import React from "react";
import Container from "../../layout/Container/Container";
import './Header.scss'
import Favorite  from './icons/favorite.svg?react'
import Logo  from './icons/logo.svg?react'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"
import {selectorFavoriteList} from "../../store/selectors.js";

const Header = () => {
	const favoriteList = useSelector(selectorFavoriteList)
	
    return (
        <header className="header">
			<Container>
				<div className="header__wrapper">
					<div className="header__logo">
						<a href="/" className="logo">
							<Logo/>
						</a>
					</div>
					<div className="header__actions">
						<div className="header__favorites-list">
							<Link to="/favorite">Список обраних</Link>
		
							<span className="icon-favorite">
		                        <span className="count">{favoriteList.length}</span>
		                        <Favorite/>
		                    </span>
						</div>
					</div>
				</div>
			</Container>
		</header>
    )
}

export default Header