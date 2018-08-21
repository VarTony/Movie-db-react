import React, { Component } from 'react'
<<<<<<< HEAD
import { Router, Route } from 'react-router-dom'

import history from '../history'

import SearchPage from '../_pages/SearchPage'
import DetailsPage from '../_pages/DetailsPage'
=======

import Header from '../Header/Header'
import Results from '../Results/Results'
>>>>>>> faf940d18b8f611d14e6a2e7a80c9bcba48d345f

class App extends Component {
  state = {
    results: []
  }

  setResults = (results) => {
    this.setState({
      results
    })
  }

  render() {
    const { results } = this.state

    return (
<<<<<<< HEAD
      <Router history={history}>
        <div>
          {/* Search Page */}
          <Route
            exact path='/'
            render={() => <SearchPage setResults={this.setResults} results={results} />}
          />

          {/* Details Page */}
          {/*component={DetailsPage}*/}
          <Route
            path='/movie/:id'
            render={(rrObj) => <DetailsPage results={results} id={rrObj.match.params.id} />}
          />
        </div>
      </Router>
=======
      <div>
        <Header setResults={this.setResults} />
        <Results results={results} />
      </div>
>>>>>>> faf940d18b8f611d14e6a2e7a80c9bcba48d345f
    )
  }
}

export default App
