import React, { Component } from 'react'
import ResultsItem from '../ResultsItem/ResultsItem'
import s from './Results.css'

class Results extends Component {
  render() {
    const { results } = this.props

    return (
      <div className={s.wrapper + ' cont'}>
        {results.length
          ? (
            <div className={s.resultsWrapper}>
              {results.map((item) => <ResultsItem key={item.show.id} item={item} />)}
            </div>
          )
          : (
            <p className={s.notFound}>No films found</p>
          )
        }
      </div>
    )
  }
}

export default Results
