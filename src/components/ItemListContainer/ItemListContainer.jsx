import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs,query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

const ItemListContainer = (props) => {

    const [dato, setDato] = useState([])
    let categoria = useParams().id
    

    
    useEffect(() => {
        
        const refProductos = collection(db, "productos")

        const q = categoria ? query(refProductos, where("categoria", "==", categoria)) : refProductos
        
        getDocs(q)
            .then((res) => {      
                setDato(
                    res.docs.map((doc) => {
                        return {...doc.data(), id: doc.id }
                    })
                )
                }
            )        
    },[categoria])
    
    return (
            <div>
                <h4 style={{color:'lightblue', fontSize:'50px', textAlign:'center'}}>{props.titulo}</h4>
                <ItemList dato={dato}/>
            </div>
    )
}

export default ItemListContainer