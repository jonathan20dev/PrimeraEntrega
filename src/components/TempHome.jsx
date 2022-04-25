import { useState } from 'react'
import {React} from 'react'
import { Novedades } from './Novedades/Novedades';
import { ProductCard } from './ProductCard/ProductCard';


function TempHome() {
  const [productosNovedad, setProductosNovedad] = useState([
    {nombre: 'Producto 1'},
    {nombre: 'Producto 2'},
    {nombre: 'Producto 3'},
  ]); 

  return (
    <div>
      <p>Menu</p>
      <p>Carousel banner</p>
      <Novedades>
        {productosNovedad.map(producto => <ProductCard key={producto.nombre} producto={producto}/>)}
      </Novedades>
    </div>
  )
}

export { TempHome }

