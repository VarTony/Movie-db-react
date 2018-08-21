<<<<<<< HEAD
import React, { Component, createRef } from 'react'
import s from './Search.css'

class Search extends Component {
  constructor (props) {
    super(props)

    this.searchRef = createRef()
  }

  state = {
    searchPhrase: 'abc',
=======
import React, { Component } from 'react'
import s from './Search.css'

class Search extends Component {
  state = {
    searchPhrase: '',
>>>>>>> faf940d18b8f611d14e6a2e7a80c9bcba48d345f
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
<<<<<<< HEAD
    fetch(`http://api.tvmaze.com/search/shows?q=${this.searchRef.current.value}`)
      .then((res) => res.json())
=======
    fetch('http://api.tvmaze.com/search/shows?q=girls')
      .then((res) => {
        return res.json()
      })
>>>>>>> faf940d18b8f611d14e6a2e7a80c9bcba48d345f
      .then((results) => {
        this.props.setResults(results)
      })
  }

<<<<<<< HEAD
=======
  componentDidMount() {
    this.searchHandler()
  }

>>>>>>> faf940d18b8f611d14e6a2e7a80c9bcba48d345f
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
<<<<<<< HEAD
          ref={this.searchRef}
=======
>>>>>>> faf940d18b8f611d14e6a2e7a80c9bcba48d345f
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
