import ProductGrid from "./ProductGrid"
import Filters from './Filters';
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

const fetchProducts = async ({ queryKey }) => {
    const [key, filters] = queryKey;

};

export default function Products() {
    const [filters, setFilters] = useState({
        category: '',
        sort: 'asc',
    });
    const { data, error, isLoading } = useProducts(filters);


    if (error) return <div>Error loading products.</div>;

    return (
        <main className='grow flex bg-gray-100'>
            <Filters filters={filters} onFilter={setFilters} />
            <ProductGrid products={data} loading={isLoading} />
        </main>
    );
}
