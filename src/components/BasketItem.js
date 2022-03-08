import React from 'react'

function BasketItem({ item, product }) {
  return (
    <>
      <li className='basket-item'>
       <img src={product.image} alt="" /> {product.title} <span>X{item.amount}</span>
      </li>
    </>
  )
}

export default BasketItem