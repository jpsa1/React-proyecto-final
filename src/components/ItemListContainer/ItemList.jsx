import React from 'react'
import Item from './Item';

const ItemList = ({dato}) => {


  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {dato && dato.map((res) => {
          return <Item producto={res} key={res.id} id={res.id} />
        }
        )}
    </div>
  )
}


export default ItemList