import React from 'react'
import propTypes from 'prop-types'
import style from './style'
import getNumber from '../../helpers/get_number'
import filterUnique from '../../helpers/filter_unique'

const User = props => {
  if (!props.array) {
    return null
  }

  // eliminar entradas repetidas
  const arrayParsed = filterUnique(props.array)

  return (
    <div className={style.content}>
      <div className={style.row}>

        <code className={style.array}>
          Array: {JSON.stringify(props.array)}
        </code>

        {arrayParsed.map((item, index) => {
          const asterisks = getNumber(item)
          return (<div key={index}>{asterisks}</div>)
        })}

      </div>
    </div>
  )
}

User.propTypes = {
  array: propTypes.array
}

export default User
