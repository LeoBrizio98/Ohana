import React, { Fragment } from 'react';
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti";
import '../../styles/components.css';

const Stars = ({ rating }) => {
    const getStars = () => {
        if (
            rating !== null &&
            rating !== undefined
        ) {
            return (
                <div>
                    {
                        rating >= 1 || rating >= 1.0 ? (
                            <TiStarFullOutline
                                className='rating_stars'
                            />
                        ) : (
                            rating === 0.5 ? (
                                <TiStarHalfOutline
                                    className='rating_stars'
                                />
                            ) : (
                                <TiStarOutline
                                    className='rating_stars empty-star'
                                />
                            )
                        )
                    }

                    {
                        rating >= 2 || rating >= 2.0 ? (
                            <TiStarFullOutline
                                className='rating_stars'
                            />
                        ) : (
                            rating === 1.5 ? (
                                <TiStarHalfOutline
                                    className='rating_stars'
                                />
                            ) : (
                                <TiStarOutline
                                    className='rating_stars empty-star'
                                />
                            )
                        )
                    }

                    {
                        rating >= 3 || rating >= 3.0 ? (
                            <TiStarFullOutline
                                className='rating_stars'
                            />
                        ) : (
                            rating === 2.5 ? (
                                <TiStarHalfOutline
                                    className='rating_stars'
                                />
                            ) : (
                                <TiStarOutline
                                    className='rating_stars empty-star'
                                />
                            )
                        )
                    }

                    {
                        rating >= 4 || rating >= 4.0 ? (
                            <TiStarFullOutline
                                className='rating_stars'
                            />
                        ) : (
                            rating === 3.5 ? (
                                <TiStarHalfOutline
                                    className='rating_stars'
                                />
                            ) : (
                                <TiStarOutline
                                    className='rating_stars empty-star'
                                />
                            )
                        )
                    }

                    {
                        rating >= 5 || rating >= 5.0 ? (
                            <TiStarFullOutline
                                className='rating_stars'
                            />
                        ) : (
                            rating === 4.5 ? (
                                <TiStarHalfOutline
                                    className='rating_stars'
                                />
                            ) : (
                                <TiStarOutline
                                    className='rating_stars empty-star'
                                />
                            )
                        )
                    }
                </div>
            )
        }
    }

    return (
        <Fragment>
            {getStars()}
        </Fragment>
    )
}

export default Stars