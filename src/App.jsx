import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Filters from './components/Filters'
import Products from './components/Products'

const products = [
  { id: 1, title: 'Smartphone', price: 599.99, image: 'https://via.placeholder.com/150' },
  { id: 1, title: 'Laptop', price: 1299.99, image: 'https://via.placeholder.com/150' },
  { id: 1, title: 'Headphones', price: 199.99, image: 'https://via.placeholder.com/150' },
  { id: 1, title: 'Camera', price: 499.99, image: 'https://via.placeholder.com/150' },
]

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const showFilteredProducts = () => {
    const filtered = products.filter(product => product.price < 500);
    setFilteredProducts(filtered);
  };

  const showAllProducts = () => {
    setFilteredProducts(products);
  };

  const handleFilter = (filterTYpe) => {
    if (filterTYpe === 'UNDER_500') {
      showFilteredProducts();
    }
    else {
      showAllProducts();
    }
  }

  return <div className='flex flex-col min-h-screen'>
    <Header />
    <main className='grow flex bg-gray-100'>
      <Filters onFilter={handleFilter} />
      <Products />
    </main>
    <p><Footer /></p>
  </div>
}

export default App
