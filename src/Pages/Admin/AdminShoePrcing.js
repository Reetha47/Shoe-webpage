import React from 'react'
import { useOutletContext } from 'react-router-dom'

const AdminShoePrcing = () => {
  const {shoe}=useOutletContext()

  return (
    <div>
      <section>
        <h4>Price Range: {shoe.price}</h4>
      </section>
    </div>
  )
}

export default AdminShoePrcing