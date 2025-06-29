import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}> 
        <Link to = {'/products/id1'}>Product1</Link>
        <Link to = {'/products/id2'}>Product2</Link>

    </div>
  )
}
