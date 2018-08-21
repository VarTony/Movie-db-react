import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import history from '../history'

import s from './Details.css'

class Details extends Component {
  state = {
    
  }

  render() {
    const { results, id } = this.props

    if (!results.length) {
      history.push('/')
      return null
    }

    const movieInfo = results.filter((res) => res.show.id === +id)[0]

    const show = movieInfo.show
    const rating = movieInfo.rating

    return (
      <div className={s.wrapper}>
        <div className={s.imgWrapper}>
          <img src={show.image && show.image.original && show.image.medium} alt={show.name} />
        </div>

        <div className={s.descWrapper}>
          <Link to='/' className={s.btnBackToSearchWrapper}>
            <button className={s.btnBackToSearch}>
              &laquo; Back to Search
            </button>
          </Link>

          <p className={s.heading}>{show.name}</p>
          <p className={s.rating}>{rating}</p>
          <p className={s.year}>{show.premiered.slice(0,4)}</p>

          <p
            className={s.summary}
            dangerouslySetInnerHTML={{ __html: show.summary}}
          />
        </div>
      </div>
    )
  }
}

export default Details
