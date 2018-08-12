import React, { Component } from 'react'

import Header from '../Header/Header'
import Results from '../Results/Results'

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
      <div>
        <Header setResults={this.setResults} />
        <Results results={results} />
      </div>
    )
  }
}

export default App
