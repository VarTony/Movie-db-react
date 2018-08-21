import React, { Component } from 'react'
import s from './Header.css'

class Header extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.backdrop} />

        <div className='cont'>
          <h2 className={s.heading}>MovieDBRoulette</h2>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Header
