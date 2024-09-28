import React from "react";
import { IMG_URL } from "../../../../configs/API";
import Button from '../../../../components/Button/Button'
import { Link } from "react-router-dom";

import './MovieItem.scss'

const MovieItem = (props) => {
    const {posterPath, title, originalTitle, overView, linkPath,onClick} = props;

    return (
        <div className="film-poster">
            <img src={`${IMG_URL}${posterPath}`} alt={title} />

            <div className='film-poster-back'>
                <h3 className="film-poster__title">{title}</h3>
                <p className="film-poster__subtitle">
                    <i>{originalTitle}</i>
                </p>
                <p className="film-poster__desc">{overView}</p>
                <div className="button__wrapper">
                    <Link className="button" to={linkPath}>Show more</Link>
                    <Button onClick={onClick}>Favorite</Button>
                </div>
            </div>
        </div>
    )
}

export default MovieItem