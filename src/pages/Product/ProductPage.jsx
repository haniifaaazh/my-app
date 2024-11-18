import {useState, useEffect} from 'react';
import getAllProducts from '../../services/getAllProducts'

export default function Product() {
  cons [products, setProducts] = useState ()
  useEffect (() => {
    let allProducts = getAllProducts()
    allProducts = allProducst.length > 0 ? allProducts : []
    setProducst(allProducts)
  }, [])
  return (
    <section className='container px-24 py-4'>
    <main className='grid grid-cols-4 gap-4'>
      <CardList products={products}/>
    </main>

    </section>
  )
}
