import PropTypes from "prop-types"
export default function Filters({ onFilter }) {
    return <aside className='w-1/4 p-4 bg-white pb-4'>
        <h2 className='text-xl font-semibold mb-4'>Filters</h2>
        <button className='block w-ful px-4 py-2 text-white rounded-md bg-gray-500 my-2' onClick={() => onFilter('UNDER_500')}>Under $500</button>
        <button className='block w-ful px-4 py-2 text-white rounded-md bg-blue-500 my-2' onClick={() => onFilter('ALL')}>All Products</button>
    </aside>
}

Filters.prototypes = {
    onFilter: PropTypes.func.isRequired,
}