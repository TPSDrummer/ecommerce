import PropTypes from 'prop-types';
import { NavLink } from 'react-router';

function SkeletonProductGrid() {
    return (
        <div className='w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
            {[...Array(6)].map((_, i) => (
                <div key={i} className='p-4 bg-white rounded shadow animate-pulse'>
                    <div className='h-40 bg-gray-200 mb-4 rounded' />
                    <div className='h-4 bg-gray-200 mb-2 w-3/4 rounded' />
                    <div className='h-4 bg-gray-200 w-1/2 rounded' />
                </div>
            ))}
        </div>
    );
}

export default function ProductGrid({ products, loading }) {
    if (loading) {
        return <SkeletonProductGrid />
    }

    if (!products || products.length === 0) {
        return <div className="w-3/4 p-4">No products found.</div>;
    }

    return <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
            <NavLink key={product.id} to={`/product/${product.id}`} className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </NavLink>
        ))}
    </div>
}

ProductGrid.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    })),
    loading: PropTypes.bool
}