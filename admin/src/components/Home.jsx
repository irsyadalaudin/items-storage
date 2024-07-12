import homeBg from '../assets/home-bg.jpg'

const Home = () => {
    return (
        <div className='mt-10 mb-16 px-28 relative'>
            <img className='' src={homeBg} alt='' />
            <div className='bg-amber-700 rounded w-430 h-176'>
                <h2>Selamat datang di HAR company</h2>
                <h4>Disini admin dapat melakukan peng-inputan barang masuk, dan barang keluar, <br /> serta juga dapat melakukan data permintaan barang setiap customer</h4>
            </div>
        </div>
    )
}

export default Home