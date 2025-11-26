import PropTypes from 'prop-types';

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

    return <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
            <div key={product.id} className="border p-4 rounded-md shadow-md">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
        ))}
    </div>
}

ProductGrid.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    })).isRequired,
    loadin: PropTypes.bool
}