import React from 'react'

type Props = FilterProps

const Filter: React.FC<Props> = ({ filter }) => {
  const checkTodo: string = filter.checked ? `line-through` : ''
  return (
    <div className='Card'>
      <div className='Card--text'>
        <h1 className={checkTodo}>{filter.name}</h1>
        <span className={checkTodo}>{filter.filter}</span>
      </div>
    </div>
  )
}

export default Filter
