import { useEffect, useState } from 'react'
import DatePickerInput from './DatePickerInput'

const Storage = () => {
    const [namaBarang, setNamaBarang] = useState('')
    const [hargaSatuan, setHargaSatuan] = useState('')
    const [jumlah, setJumlah] = useState('')
	const [items, setItems] = useState([])
	const [selectedDate, setSelectedDate] = useState(new Date())    // INISIALISASI selectedDate DENGAN TANGGAL SAAT INI
	const [editId, setEditId] = useState()
	const [editValues, setEditValues] = useState({})

	// UNTUK MERUBAH TANGGAL MENGGUNAKAN DatePicker
	const handleDateChange = (date) => {
		setSelectedDate(date)
	}

	// UNTUK MENAMBAHKAN ITEM
	const handleSubmit = (e) => {
		e.preventDefault()    // MENCEGAH RELOAD HALAMAN

		// MEMBUAT OBJEK BARU UNTUK ITEM YANG DIINPUT
		const newItem = {
			id: Date.now(),			   // MENGGUNAKAN id UNIK DI SETIAP ITEM
			tanggal : selectedDate,    // MENGGUNAKAN selectedDate SEBAGAI TANGGAL DENGAN FORMAT dd/MM/YYYY
			namaBarang,
			hargaSatuan,
			jumlah
		}

		console.log('ID:', newItem.id)
		console.log('Tanggal:', selectedDate)    // MENG-console.log NYA JUGA PAKAI selectedDate
        console.log('Nama Barang:', namaBarang)
        console.log('Harga Satuan:', hargaSatuan)
        console.log('Jumlah:', jumlah)

		// MENAMBAHKAN ITEM BARU KE DALAM ARRAY ITEMS   // DAN MEMASUKANNYA KE DALAM localStorage
		// setItems([...items, newItem])
		const updatedItems = [...items, newItem]
		setItems(updatedItems)
		localStorage.setItem('items', JSON.stringify(updatedItems))

		// RESET FORM INPUT, SETELAH MENAMBAHKAN ITEM BARU KE DALAM ARAY ITEMS
		setNamaBarang('')
		setHargaSatuan('')
		setJumlah('')
	}

	// UNTUK MENGHAPUS 1 ITEM
	const handleDelete = (id) => {
		const updatedItems = items.filter((item) => item.id !== id)
		setItems(updatedItems)
		localStorage.setItem('items', JSON.stringify(updatedItems))
	}

	// UNTUK MENGHAPUS SELURUH ITEM
	const handleDeleteAll = () => {
		setItems([])
		localStorage.removeItem('items')
	}

	// useEffect UNTUK MENGAMBIL items DI localStorage UNTUK AGAR BISA DI EDIT
	useEffect(() => {
		const storedItems = localStorage.getItem('items')
		if (storedItems) {
			setItems(JSON.parse(storedItems))
		}
	}, [])

	const handleEdit = (id, item) => {
		setEditId(id)
		setEditValues(item)
	}

	const handleSaveAfterEdit = () => {
		const updatedItems = items.map((item) => item.id === editId ? { ...item, ...editValues } : item)
		setItems(updatedItems)
		localStorage.setItem('items', JSON.stringify(updatedItems))  // MENYIMPAN PERUBAHAN ITEMS YANG HABIS DI EDIT KE localStorage
		setEditId()
		setEditValues({})
	}

	const handleEnterAfterEdit = (e) => {
		if (e.key === 'Enter') {
			handleSaveAfterEdit()
		}
	}

	// MENGGUNAKAN FUNGSI formatDate UNTUK MENETAPKAN FORMAT dd/MM/yyy KETIKA HALAMAN DI-RELOAD
	const formatDate = (date) => {
		const day = date.getDate().toString().padStart(2, '0')
		const month = (date.getMonth()+ 1).toString().padStart(2, '0')
		const year = date.getFullYear()
		return`${day}/${month}/${year}`
	}

    return (
        <div className='px-28'>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                <h2>Data barang masuk</h2>
				<DatePickerInput
					selectedDate={selectedDate}
					handleDateChange={handleDateChange}
				/>
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
						type='number' 
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
			<>
				{items.map((item) => (
					<div key={item.id}>
						<ul>
							{/* MEMBUAT if-else statement, UNTUK MENGECEK APAKAH editId SAMA DENGAN === item.id */}
							{/* if `true`=, MAKA FUNGSI handleEdit AKAN BERJALAN DAN BISA MENGEDIT tanggal, namaBarang, hargaSatuan, jumlah */}
							{editId === item.id ? (
								<>
									<li>
										{/* MEMAKAI editValues.tanggal AGAR NILAI TANGGAL YANG DIPILIH SAAT MENGEDIT DISIMPAN DALAM editValues DAN TIDAK DIPENGARUHI OLEH selectedDate DI LUAR LOOP */}
										<DatePickerInput
											selectedDate={(editValues.tanggal)}
											handleDateChange={(date) => setEditValues({ ...editValues, tanggal: date })}
											onKeyDown={handleEnterAfterEdit}
										/>
									</li>
									<li>
										<input
											type='text' 
											value={editValues.namaBarang}
											onChange={(e) => setEditValues({ ...editValues, namaBarang: e.target.value })}
											onKeyDown={handleEnterAfterEdit}
										/>
									</li>
									<li>
										<input 
											type='number'
											value={editValues.hargaSatuan}
											onChange={(e) => setEditValues({ ...editValues, hargaSatuan: e.target.value })}
											onKeyDown={handleEnterAfterEdit}
											/>
									</li>
									<li>
										<input 
											type='number'
											value ={editValues.jumlah}
											onChange={(e) => setEditValues({ ...editValues, jumlah: e.target.value })}
											onKeyDown={handleEnterAfterEdit}
										/>
									</li>
									<button onClick={handleSaveAfterEdit}>save</button>
								</>
								) : (
								/* ELSE if `false`= MAKA DISPLAY HANYA AKAN MEMUNCULKAN KEEMPAT items TADI */
								<>
									{/* <li>{item.tanggal.toLocaleString('en-GB', { day:'2-digit', month:'2-digit', year:'numeric' })}</li>  MENGGUNAKAN toLocaleString() LANGSUNG PADA tanggal DAN MENGGUNAKAN 'en-GB' UNTUK MEMUNCULKAN dd/MM/YYYY ALIH-ALIH 'en-US' */}
									<li>{formatDate(new Date(item.tanggal))}</li>  {/* FORMAT TANGGAL MENGGUNAKAN FUNGSI formatDate */}
									<li>{item.namaBarang}</li>
									<li>{item.hargaSatuan}</li>
									<li>{item.jumlah}</li>
									<button onClick={() => handleEdit(item.id, item)}>edit</button>
								</>
							)}
							<button onClick={() => handleDelete(item.id)}>delete</button>
						</ul>
					</div>
				))}
				{/* MEMBUAT BUTTON delete all DI PALING BAWAH SELURUH items */}
				{items.length > 0 && (
					<button onClick={() => handleDeleteAll()}>delete all</button>
				)}
			</>
        </div>
	)
}

export default Storage