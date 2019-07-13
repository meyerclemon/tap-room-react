import React from 'react'
import tapsRow from './tapsRow.jpg'

function Header() {
  return (
    <div>
      <img src={tapsRow} alt="row of taps"/>
      <hr />
      <h1>Le Bartender - Keg List</h1>

      <hr />
    </div>
  )
}

export default Header