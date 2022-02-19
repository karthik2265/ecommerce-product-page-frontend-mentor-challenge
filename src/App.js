import React from 'react'
import ShowcaseImages from './components/Main/ShowcaseImages'
import Menu from './components/Menu/Menu'
import Info from './components/Main/Info'
import { CartContextProvider } from './store/CartContext'
import classes from '../src/components/Main/Main.module.css'

function App() {
  return (
    <CartContextProvider>
      <Menu />
      <div className={classes['main-div']}>
        <ShowcaseImages />
        <Info />
      </div>
    </CartContextProvider>
  )
}

export default App
