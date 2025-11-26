import { useState } from 'react'
import ProductGrid from "./ProductGrid"

export default function Products() {
    const [products, setProducts] = useState([])
    return (
        <section className='grow p-4'>
            <ProductGrid products={products} />
        </section>
    );
}
