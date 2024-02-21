import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Storage from './components/Storage'

const App = () => {
		return (
			<div className='px-28'>
				<Navbar />
				<Home />
				<Storage />
			</div>
	)
}

export default App