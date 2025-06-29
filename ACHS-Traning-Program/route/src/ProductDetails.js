import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ProductDetails() {
    const {id} =useLoaderData()
  return (
    <div>
        {`Product ${id}`}
    </div>
  )
}
