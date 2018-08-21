import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'

import history from '../history'

import SearchPage from '../_pages/SearchPage'
import DetailsPage from '../_pages/DetailsPage'

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
    )
  }
}

export default App
