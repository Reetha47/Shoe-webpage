import React from 'react'
import { useOutletContext } from 'react-router-dom'

const AdminShoeInfo = () => {
  const { shoe } = useOutletContext()
  return (
    <div>
      <section>
        <h4>Title: {shoe.title}</h4>
        <h4>Brand: {shoe.brand} </h4>
        <h4>Color: {shoe.color}</h4>
        <h4>Size: {shoe.size}</h4>

      </section>
    </div>
  )
}

export default AdminShoeInfo