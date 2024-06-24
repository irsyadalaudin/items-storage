import navLogo from '../assets/nav-logo2.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex flex-row items-center justify-between sticky top-0 z-10 px-28 shadow-lg'>
            <div>
                <img className='mt-1' src={navLogo} alt={'nav-logo'} />
            </div>

            <div className='flex gap-4'>
                <Link to='/' className='no-underline'>Beranda</Link>
                <Link to='/' className='no-underline'>Penyimpanan barang</Link>
            </div>
        </nav>
    )
}

export default Navbar