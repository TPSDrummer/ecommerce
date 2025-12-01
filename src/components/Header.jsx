import { NavLink } from "react-router";
import checkoutIcon from '../assets/shopping-cart.svg?url';

export default function Header() {
    return (
        <header className='bg-blue-600 text-white p-4 flex justify-between items-center'>
            <NavLink to='/' className="hover:opacity-80 transition-opacity">
            <h1 className="text-3xl font-bold font-sans">Trendy Mart</h1>
            </NavLink>
            <NavLink to='/checkout' className="p-2 hover:bg-blue-700 transition-colors rounded-full">
                <img src={checkoutIcon} alt="Checkout" className="w-6 h-6 invert"/>
            </NavLink>
        </header>
    );
}
