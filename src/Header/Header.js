import React, { Component } from 'react'
<<<<<<< HEAD
=======

import Search from '../Search/Search'

>>>>>>> faf940d18b8f611d14e6a2e7a80c9bcba48d345f
import s from './Header.css'

class Header extends Component {
  render() {
    return (
      <div className={s.wrapper}>
<<<<<<< HEAD
        <div className={s.backdrop} />

        <div className='cont'>
          <h2 className={s.heading}>MovieDBRoulette</h2>
          {this.props.children}
=======
        <div className='cont'>
          <h2 className={s.heading}>MovieDBRoulette</h2>
          <Search setResults={this.props.setResults} />
>>>>>>> faf940d18b8f611d14e6a2e7a80c9bcba48d345f
        </div>
      </div>
    )
  }
}

export default Header
