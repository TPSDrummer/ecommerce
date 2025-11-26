import PropTypes from 'prop-types';

export default function ProductGrid({ products }) {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
}