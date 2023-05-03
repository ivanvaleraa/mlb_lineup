import React from 'react'
const IMAGE_LOGO_BASEBALL = '/images/baseball_logo.png'

function Header () {
  return (
    <header className="header">
        <h1 className="header--title">MLB Daily Lineup</h1>
        <img className="header--logo" src={IMAGE_LOGO_BASEBALL} alt="" />
    </header>
  )
}

export default Header
