import React, { useState } from 'react'
import style from './style'
import propTypes from 'prop-types'
import stringToArray from '../../helpers/input_to_array'

const Form = props => {
  const [data, setData] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    props.setArray(stringToArray(data))
  }

  return (
    <form className={style.content} onSubmit={handleSubmit}>
      <input
        velue={data}
        onChange={e => setData(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Enter array example: "1, 2, 3, 4, E"'
      />
      <button
        type='submit'
        className={style.button}
      >
        Enviar
      </button>
    </form>
  )
}

Form.propTypes = {
  setArray: propTypes.func
}
export default Form
