import React, { useState } from 'react'
import style from './style'
import Form from './components/form'
import Render from './components/render'

const App = props => {
  const [array, setArray] = useState(null)

  return (
    <main className={style.container}>
      <Form array={array} setArray={setArray} />
      <Render array={array} />
    </main>
  )
}

export default App
