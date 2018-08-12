import React, { Component } from 'react'
import s from './Search.css'

class Search extends Component {
  state = {
    searchPhrase: '',
    searchBy: 'title'
  }

  changeSearchBy = (e) => {
    this.setState({
      searchBy: e.target.dataset.searchBy
    })
  }

  changeSearchPhrase = (e) => {
    this.setState({
      searchPhrase: e.target.value
    })
  }

  searchHandler = () => {
    fetch('http://api.tvmaze.com/search/shows?q=girls')
      .then((res) => {
        return res.json()
      })
      .then((results) => {
        this.props.setResults(results)
      })
  }

  componentDidMount() {
    this.searchHandler()
  }

  render() {
    const { searchPhrase, searchBy } = this.state

    return (
      <div>
        <h1 className={s.heading}>Find your movie</h1>

        <input
          className={s.searchPhrase}
          type='text'
          placeholder='Enter search phrase..'
          value={searchPhrase}
          onChange={this.changeSearchPhrase}
        />

        <div className={s.controlsWrapper}>
          <div className={s.searchBy}>
              <span>Search by</span>

              <button
                className={s.button + ((searchBy === 'title') ? ' ' + s.active : '')}
                onClick={this.changeSearchBy}
                data-search-by='title'
              >
                Title
              </button>

              <button
                className={s.button + ((searchBy === 'director') ? ' ' + s.active : '')}
                onClick={this.changeSearchBy}
                data-search-by='director'
              >
                Director
              </button>
          </div>

          <button
            className={s.btnSearch + ((searchPhrase.length) ? '' : ' ' + s.disabled)}
            onClick={this.searchHandler}
          >
            Search
          </button>
        </div>
      </div>
    )
  }
}

export default Search
