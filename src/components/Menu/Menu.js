import React, { useState } from 'react'
import classes from './menu.module.css'

import userAvatar from '../../images/image-avatar.png'

const Menu = () => {
  const [cartPreviewIsVisible, setCartPreviewIsVisible] = useState(false)
  const [cartIsEmpty, setCartIsEmpty] = useState(true)
  return (
    <div className={classes.menu}>
      <ul className={classes.navbar}>
        <li className={classes.brand}>sneakers</li>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={classes.user_options}>
        <div className={classes.cart}></div>
        {cartPreviewIsVisible && (
          <div className={classes.cart_preview}>
            <h3>Cart</h3>
            {cartIsEmpty ? (
              <h3>Your cart is empty</h3>
            ) : (
              <div className={classes.cart_items}></div>
            )}
          </div>
        )}
        <img
          src={userAvatar}
          alt='user-img'
          className={classes.user_icon}
        ></img>
      </div>
    </div>
  )
}

export default Menu
