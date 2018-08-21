import React from 'react'
<<<<<<< HEAD

import history from '../history'

import s from './ResultsItem.css'

const imgClickHandler = (e) => {
  history.push(`/movie/${e.target.dataset.id}`)
}

const ResultsItem = (props) => {
  const { show } = props.item

  return (
    <div>
      <img
        src={show.image && show.image.medium} alt={show.name}
        className={s.img}
        onClick={imgClickHandler}
        data-id={show.id}
=======
import s from './ResultsItem.css'

const ResultsItem = ({ item: { show } }) => {
  return (
    <div>
      <img
        src={show.image.medium} alt={show.name}
        className={s.img}
>>>>>>> faf940d18b8f611d14e6a2e7a80c9bcba48d345f
      />

      <div className={s.descWrapper}>
        <p className={s.name}>{show.name}</p>
        <p className={s.year}>{show.premiered}</p>

        <ul className={s.genresList}>
<<<<<<< HEAD
          {show.genres && show.genres.map((genre, i) => <li key={i} className={s.genre}>{genre}</li>)}
=======
          {show.genres && show.genres.map((genre) => <li className={s.genre}>{genre}</li>)}
>>>>>>> faf940d18b8f611d14e6a2e7a80c9bcba48d345f
        </ul>
      </div>
    </div>
  )
}

export default ResultsItem
