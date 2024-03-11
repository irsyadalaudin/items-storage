import { useRef, useState } from 'react'

const Storage = () => {
    const [tanggal, setTanggal] = useState('')
    const [namaBarang, setNamaBarang] = useState('')
    const [hargaSatuan, setHargaSatuan] = useState('')
    const [jumlah, setJumlah] = useState('')
	const [items, setItems] = useState([])
	const [errorMessage, setErrorMessage] = useState('')
	const inputRef = useRef('')

	// const handleDateChange = (e) => {
	// 	const inputDate = e.target.value

	// 	// FORMAT YANG DIGUNAKAN DD/MM/YYYY
	// 	const regex = /^\d{2}\/\d{2}\/\d{4}$/  // VALIDASI FORMAT DENGAN REGEX

	// 	if (regex.test(inputDate)) {
	// 		setTanggal(inputDate)
	// 		setErrorMessage('')
	// 	} else {
	// 		setErrorMessage('Format tanggal harus DD/MM/YYYY')
	// 	}
	// }

	const handleDateChange = () => {
		const inputDate = inputRef.current.value

		// FORMAT YANG DIGUNAKAN DD/MM/YYYY
		const regex = /^\d{2}\/\d{2}\/\d{4}$/  // VALIDASI FORMAT DENGAN REGEX

		if (regex.test(inputDate)) {
			setTanggal(inputDate)
			setErrorMessage('')
		} else {
			setErrorMessage('Format tanggal harus DD/MM/YYYY')
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()    // MENCEGAH RELOAD HALAMAN

		// MEMBUAT OBJEK BARU UNTUK ITEM YANG DIINPUT
		const newItem = {
			tanggal,
			namaBarang,
			hargaSatuan,
			jumlah
		}

		console.log('Tanggal:', tanggal)
        console.log('Nama Barang:', namaBarang)
        console.log('Harga Satuan:', hargaSatuan)
        console.log('Jumlah:', jumlah)

		// MENAMBAHKAN ITEM BARU KE DALAM ARRAY ITEMS
		setItems([...items, newItem])

		// RESET FORM INPUT, SETELAH MENAMBAHKAN ITEM BARU KE DALAM ARAY ITEMS
		setTanggal('')
		setNamaBarang('')
		setHargaSatuan('')
		setJumlah('')
	}

	const handleDelete = (index) => {
		const updatedItems = [...items]
		updatedItems.splice(index, 1)
		setItems(updatedItems)
	}

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Data barang masuk</h2>
                <div>
                    <label htmlFor='Tanggal'>Tanggal:</label>
                    {/* <input 
						type='number' 
						value={tanggal} 
						onChange={handleDateChange} 
					/> */}
					<input 
						type='number' 
						ref={inputRef}
						defaultValue={tanggal}
						onBlur={handleDateChange}
						placeholder='DD/MM/YYYY' 
					/>
					{errorMessage}
                </div>

                <div>
                    <label htmlFor='Nama Barang'>Nama barang:</label>
                    <input 
						type='text' 
						value={namaBarang} 
						onChange={(e) => setNamaBarang(e.target.value)} 
					/>
                </div>
                <div>
                    <label htmlFor='Harga Satuan'>Harga Satuan:</label>
                    <input 
						type='text' 
						value={hargaSatuan} 
						onChange={(e) => setHargaSatuan(e.target.value)} 
					/>
                </div>
                <div>
                    <label htmlFor='Jumlah'>Jumlah:</label>
                    <input 
						type='number' 
						value={jumlah} 
						onChange={(e) => setJumlah(e.target.value)} 
					/>
                </div>
                <div>
					<button type='submit'>enter</button>
                </div>
            </form>

			{/* MENAMPILKAN DATA BARANG */}
			<div>
				{items.map((item, index) => (
					<ul key={index}>
						<li>{item.tanggal}</li>
						<li>{item.namaBarang}</li>
						<li>{item.hargaSatuan}</li>
						<li>{item.jumlah}</li>
						<button onClick={() => handleDelete(index)}>delete</button>
					</ul>
				))}
			</div>
        </>
	)
}

export default Storage