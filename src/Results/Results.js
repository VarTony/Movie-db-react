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
<<<<<<< HEAD
              {results.map((item) => <ResultsItem key={item.show.id} item={item} />)}
=======
              {results.map((item) => <ResultsItem item={item} />)}
>>>>>>> faf940d18b8f611d14e6a2e7a80c9bcba48d345f
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
