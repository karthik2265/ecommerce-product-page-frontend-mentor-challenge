import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import classes from './menu.module.css'
import thumbnailImage from '../../images/image-product-1-thumbnail.jpg'
import userAvatar from '../../images/image-avatar.png'
import CartContext from '../../store/CartContext'

const Menu = () => {
  const [cartPreviewIsVisible, setCartPreviewIsVisible] = useState(false)
  const cartContext = useContext(CartContext)
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false)

  const cartPreview = cartPreviewIsVisible && (
    <div className={classes.cart_preview}>
      <h3>Cart</h3>
      <div>
        {cartContext.noOfItems === 0 ? (
          <h3>Your cart is empty</h3>
        ) : (
          <div>
            <div className={classes.cart_items}>
              <img
                src={thumbnailImage}
                alt='product-img'
                className={classes.thumbnailImage}
              />
              <div className={classes.info}>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {cartContext.noOfItems}
                  <span className={classes.total}>
                    {'  ' + cartContext.noOfItems * 125}
                  </span>
                </p>
              </div>
              <div
                onClick={() => {
                  cartContext.deleteItems()
                }}
                className={classes.delete_btn}
              ></div>
            </div>
            <div className={classes.checkout_btn}>Checkout</div>
          </div>
        )}
      </div>
    </div>
  )
  const itemsCount = cartContext.noOfItems > 0 && cartPreviewIsVisible && (
    <div className={classes.items_count}>{cartContext.noOfItems}</div>
  )
  const mouseEnterHandler = function () {
    setCartPreviewIsVisible(true)
  }
  const mouseLeaveHandler = function () {
    setCartPreviewIsVisible(false)
  }

  const mobileMenuClickHandler = function () {
    setMobileMenuIsVisible(true)
  }

  const closeBtnHandler = function () {
    setMobileMenuIsVisible(false)
  }

  const mobileMenu1 = (
    <div className={classes.menu_wrapper}>
      <ul className={classes.navbar}>
        <div onClick={closeBtnHandler} className={classes.close_btn}></div>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )

  const desktopMenu1 = (
    <ul className={classes.navbar + ' ' + classes.desktop_menu}>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  )

  return (
    <div className={classes.menu}>
      {mobileMenuIsVisible &&
        ReactDOM.createPortal(
          <div className={classes.mobile_menu_backdrop}></div>,
          document.getElementById('overlay-elements-root')
        )}
      <div className={classes.brand_div}>
        <div className={classes.menu_btn} onClick={mobileMenuClickHandler} />
        <p className={classes.brand}>sneakers</p>
      </div>
      {desktopMenu1}
      {mobileMenuIsVisible && mobileMenu1}

      <div className={classes.user_options}>
        <div
          className={classes.cart}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          onClick={() => {
            setCartPreviewIsVisible((prev) => {
              return !prev
            })
          }}
        >
          {itemsCount}
          {cartPreview}
        </div>

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
