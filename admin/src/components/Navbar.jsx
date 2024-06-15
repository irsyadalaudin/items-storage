import navLogo from '../assets/nav-logo2.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-primary fixed top-0'>
            <div className='flex flex-wrap items-center justify-between mt-4'>
                <img className='' src={navLogo} alt={'nav-logo'} />

                <div className=''>
                    <Link to='/'>Beranda</Link>
                    <Link to='/'>Penyimpanan barang</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar