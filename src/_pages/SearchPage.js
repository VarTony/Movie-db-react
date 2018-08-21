import React from 'react'

import Header from '../Header/Header'
import Search from '../Search/Search'
import Results from '../Results/Results'

const SearchPage = (props) => (
  <div>
    <Header>
      <Search setResults={props.setResults} />
    </Header>

    <Results results={props.results} />
  </div>
)

export default SearchPage
