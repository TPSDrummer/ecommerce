import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductGrid from './components/ProductGrid'

const products = [
  { id: 1, title: 'Smartphone', price: 599.99, image: 'https://via.placeholder.com/150' },
  { id: 1, title: 'Laptop', price: 1299.99, image: 'https://via.placeholder.com/150' },
  { id: 1, title: 'Headphones', price: 199.99, image: 'https://via.placeholder.com/150' },
  { id: 1, title: 'Camera', price: 499.99, image: 'https://via.placeholder.com/150' },
]

function App() {
  return <div className='flex flex-col min-h-screen'>
    <Header />
    <main className='grow flex items-center justify-center'>
      <ProductGrid products={products} />
    </main>
    <p><Footer /></p>
  </div>
}

export default App
