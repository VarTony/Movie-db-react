import React from 'react'
import s from './ResultsItem.css'

const ResultsItem = ({ item: { show } }) => {
  return (
    <div>
      <img
        src={show.image.medium} alt={show.name}
        className={s.img}
      />

      <div className={s.descWrapper}>
        <p className={s.name}>{show.name}</p>
        <p className={s.year}>{show.premiered}</p>

        <ul className={s.genresList}>
          {show.genres && show.genres.map((genre) => <li className={s.genre}>{genre}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default ResultsItem
