import React, { Component } from 'react'

import Header from '../Header/Header'
import Details from '../Details/Details'
import Similar from '../Similar/Similar'

class DetailsPage extends Component {
  render() {
    return (
      <div>
        <Header>
          <Details
            id={this.props.id}
            results={this.props.results}
          />
        </Header>

        <Similar />
      </div>
    )
  }
}

export default DetailsPage
