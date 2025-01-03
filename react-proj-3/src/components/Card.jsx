import React from 'react'

const Card = ({data}) => {
    const imageUrlCreate = (url) => {
        const pokeId = url.split("/").at(-2)
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`
    }
  return (
    <div className='border-red-400 m-5 '>
        <img src={imageUrlCreate(data.url)} className='max-h-48' alt="img" />
        <p className='text-4xl'>{data.name}</p>

    </div>
  )
}

export default Card