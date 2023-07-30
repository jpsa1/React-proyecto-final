import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { leerProductos } from '../Funciones/funciones'
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
            setItem(
              {...resp.data(), id: resp.id}
            )  
          })

    },[])
  
  
  return (
    <div>
        <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer