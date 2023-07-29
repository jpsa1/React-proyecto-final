export const leerProductos = (categoria) => {
    
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoria}`)
}

