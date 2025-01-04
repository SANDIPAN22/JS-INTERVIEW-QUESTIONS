import React from 'react'

const UserCard = ({data}) => {
  return (
    <div className='m-8'>
    <img src={data.picture?.large} alt="profile pic" srcset="" />
    <p>Name: {data.name.first} {data.name.last} </p>
    <p>Email: {data.email}</p>
    <p>Phone: {data.phone}</p>
    <p>Country: {data.location?.country}</p>
    </div>
  )
}

export default UserCard