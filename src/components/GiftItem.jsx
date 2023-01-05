import React from 'react'

export const GiftItem = ({data}) => {

  return (
    <div className='card'>
      <img src={data.url} alt={data.title}></img>
      <p>{data.title}</p>
    </div>
  )
}
