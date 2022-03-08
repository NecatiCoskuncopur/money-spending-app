import React from 'react'
import {moneyFormat} from '../helpers'

function Header({ total, money }) {
  return (
    <div className='header'> 
      {total > 0 && money - total !== 0 && (
        <div className='header'>You have <span>${moneyFormat(money - total)}</span> left to spend</div>
      )}
      {total === 0 && (
        <div className='header'>You have <span>${moneyFormat(money)} </span> to spend</div>
      )}
        {money - total === 0 && (
        <div className='header'>You are out of money</div>
      )}
    </div>
  )
}

export default Header