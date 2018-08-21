import React from 'react'

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
      />

      <div className={s.descWrapper}>
        <p className={s.name}>{show.name}</p>
        <p className={s.year}>{show.premiered}</p>

        <ul className={s.genresList}>
          {show.genres && show.genres.map((genre, i) => <li key={i} className={s.genre}>{genre}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default ResultsItem
