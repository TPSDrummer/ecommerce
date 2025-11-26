import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types"
import { productService } from "../services/ProductService";

export default function Filters({ filters, onFilter }) {
    const { data, error, isLoading } = useQuery(
        {
            queryKey: ['categories'],
            queryFn: () => productService.getCategories(),
        });


    if (isLoading) return <aside className='w-1/4 p-4 bg-white pb-4'>Loading categories...</aside>;
    if (error) return <aside className='w-1/4 p-4 bg-white pb-4'>Error loading categories.</aside>;

    return <aside className='w-1/4 p-4 bg-white pb-4'>
        <div className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Sort By</h3>
            <select
                onChange={(e) => onFilter((prev) => ({ ...prev, sort: e.target.value }))}
                className="w-full p-2 border rounded-md">
                <option value='asc'>Price: Low to High</option>
                <option value='desc'>Price: High to Low</option>
            </select>
        </div>
        <div className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => onFilter((prev) => ({ ...prev, category: '' }))}
                    className={`px-3 py-1 rounded-full ${filters.category === ''
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                >
                    All Products
                </button>
                {data.map((category) => (
                    <button
                        key={category}
                        onClick={() => onFilter((prev) => ({ ...prev, category: category }))}
                        className={`px-3 py-1 rounded-full ${filters.category === category
                            ? 'bg-blue-600 text-white capitalize'
                            : 'bg-gray-200 hover:bg-gray-300 capitalize'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    </aside>
}

Filters.prototypes = {
    filters: PropTypes.shape({
        category: PropTypes.string,
        sort: PropTypes.string,
        maxPrice: PropTypes.number,
    }),
    onFilter: PropTypes.func.isRequired,
}