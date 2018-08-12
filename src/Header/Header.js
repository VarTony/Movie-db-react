import React, { Component } from 'react'

import Search from '../Search/Search'

import s from './Header.css'

class Header extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        <div className='cont'>
          <h2 className={s.heading}>MovieDBRoulette</h2>
          <Search setResults={this.props.setResults} />
        </div>
      </div>
    )
  }
}

export default Header
