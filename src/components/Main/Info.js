import React, { Fragment, useContext } from 'react'
import classes from './Main.module.css'
import CartContext from '../../store/CartContext'

const Info = () => {
  const cartContext = useContext(CartContext)
  return (
    <Fragment>
      <div className={classes.info}>
        <p className={classes['brand-name']}>SNEAKER COMPANY</p>
        <h2 className={classes['product-title']}>
          Fall Limited Edition Sneakers
        </h2>
        <p className={classes['product-info']}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>
        <div className={classes['product-price-div']}>
          <div className={classes['product-price']}>
            $125.00 <div className={classes['product-discount']}>50%</div>
          </div>
          <div className={classes['product-actual-price']}>
            <p>$250.00</p>
          </div>
        </div>
        <div className={classes['actions']}>
          <div className={classes['items-count-btn']}>
            <div
              onClick={() => {
                if (cartContext.noOfItems >= 1) {
                  cartContext.decrementItemsCount()
                }
              }}
              className={classes['minus-btn']}
            ></div>
            <div>
              <h3>{cartContext.noOfItems}</h3>
            </div>
            <div
              onClick={() => cartContext.incrementItemsCount()}
              className={classes['plus-btn']}
            ></div>
          </div>
          <div
            className={classes['add-to-cart-btn']}
            onClick={cartContext.incrementItemsCount}
          >
            <span className={`${classes['cart-icon']}`} />
            <h3>Add to cart</h3>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Info
