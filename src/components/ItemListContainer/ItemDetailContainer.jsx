import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'


const ItemDetailContainer = () => {
  
    const [item, setItem] = useState([])
    const id = useParams().id


    useEffect(() => {

        const docRef = doc(db, "productos", id)
        getDoc(docRef)
          .then((resp) => {
         
            if (resp.data() == undefined) {
              setItem([])
            } else {
              setItem({...resp.data(), id: resp.id})
            }
          })
    },[])
  
  if (item.length == 0) {return (<div><h2>EL PRODUCTO NO EXISTE</h2> </div>)}

  return (
    <div>
        <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer