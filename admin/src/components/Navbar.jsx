import navLogo from '../assets/nav-logo2.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-primary'>
            <img src={navLogo} alt={'nav-logo'} />

            <div>
                <Link to='/'>Beranda</Link>
                <Link to='/'>Penyimpanan barang</Link>
            </div>
        </nav>
    )
}

export default Navbar