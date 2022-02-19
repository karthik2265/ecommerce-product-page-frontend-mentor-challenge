import React, { Fragment, useState } from 'react'
import classes from './Main.module.css'

// importing bigImages
import bigImage1 from '../../images/image-product-1.jpg'
import bigImage2 from '../../images/image-product-2.jpg'
import bigImage3 from '../../images/image-product-3.jpg'
import bigImage4 from '../../images/image-product-4.jpg'

// importing thumbnailImages
import thumbnailImage1 from '../../images/image-product-1-thumbnail.jpg'
import thumbnailImage2 from '../../images/image-product-2-thumbnail.jpg'
import thumbnailImage3 from '../../images/image-product-3-thumbnail.jpg'
import thumbnailImage4 from '../../images/image-product-4-thumbnail.jpg'

const ShowcaseImages = () => {
  const bigImages = [bigImage1, bigImage2, bigImage3, bigImage4]
  const thumbnailImages = [
    thumbnailImage1,
    thumbnailImage2,
    thumbnailImage3,
    thumbnailImage4,
  ]
  // manage state of currently showing big image and lightbox
  const [bigImgIdx, setBigImgIdx] = useState(0)
  const [lightboxOpened, setLightboxOpened] = useState(false)

  // event handlers
  const thumbnailImgClickHandler = function (index) {
    setBigImgIdx(index)
  }

  // images-container and lightbox
  const imagesContainer = (
    <div className={`${classes['container']}`}>
      <div className={classes['big-img-container']}>
        <img
          onClick={() => setLightboxOpened(true)}
          className={classes.bigImg}
          src={bigImages[bigImgIdx]}
          alt='product'
        />
        <div className={classes['move-right-btn']}>
          <div
            onClick={() => {
              if (bigImgIdx < 3) {
                setBigImgIdx((prev) => prev + 1)
              }
            }}
            className={classes['move-right']}
          ></div>
        </div>
        <div className={classes['move-left-btn']}>
          <div
            onClick={() => {
              if (bigImgIdx > 0) {
                setBigImgIdx((prev) => prev - 1)
              }
            }}
            className={classes['move-left']}
          ></div>
        </div>
      </div>
      <div className={classes['thumbnail-images']}>
        {thumbnailImages.map((imgSrc, id) => {
          return (
            <div
              className={`${
                bigImgIdx === id ? classes['thumbnail-active-div'] : ''
              } ${classes['thumbnail-div']}`}
              key={id}
            >
              <img
                className={`${
                  bigImgIdx === id ? classes['thumbnail-active-img'] : ''
                }`}
                src={imgSrc}
                alt='thumbnail-img'
                onClick={() => thumbnailImgClickHandler(id)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )

  const lightbox = (
    <div className={`${classes['container']} ${classes['lightbox-backdrop']}`}>
      <div className={classes['big-img-container']}>
        <img
          className={classes.bigImg}
          src={bigImages[bigImgIdx]}
          alt='product'
        />
        <div
          className={classes['close-btn']}
          onClick={() => setLightboxOpened(false)}
        ></div>
        <div className={classes['lightbox-move-right-btn']}>
          <div
            onClick={() => {
              if (bigImgIdx < 3) {
                setBigImgIdx((prev) => prev + 1)
              }
            }}
            className={classes['lightbox-move-right']}
          ></div>
        </div>
        <div className={classes['lightbox-move-left-btn']}>
          <div
            onClick={() => {
              if (bigImgIdx > 0) {
                setBigImgIdx((prev) => prev - 1)
              }
            }}
            className={classes['lightbox-move-left']}
          ></div>
        </div>
      </div>
      <div className={classes['thumbnail-images']}>
        {thumbnailImages.map((imgSrc, id) => {
          return (
            <div
              className={`${
                bigImgIdx === id ? classes['thumbnail-active-div'] : ''
              } ${classes['thumbnail-div']}`}
              key={id}
            >
              <img
                className={`${
                  bigImgIdx === id ? classes['thumbnail-active-img'] : ''
                }`}
                src={imgSrc}
                alt='thumbnail-img'
                onClick={() => thumbnailImgClickHandler(id)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <Fragment>
      {imagesContainer}
      {lightboxOpened && lightbox}
    </Fragment>
  )
}

export default ShowcaseImages
