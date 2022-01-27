import React, { Fragment } from 'react'
import ShowcaseImages from './components/Main/ShowcaseImages'
import Menu from './components/Menu/Menu'
import Info from './components/Main/Info'

function App() {
  return (
    <Fragment>
      <Menu />
      <div>
        <ShowcaseImages />
        <Info />
      </div>
    </Fragment>
  )
}

export default App
