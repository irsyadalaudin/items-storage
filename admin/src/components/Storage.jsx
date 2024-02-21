import { useEffect, useState } from 'react'

const Storage = () => {
    const [tanggal, setTanggal] = useState('')
    const [namaBarang, setNamaBarang] = useState('')
    const [hargaSatuan, setHargaSatuan] = useState('')
    const [jumlah, setJumlah] = useState('')

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                handleClick()
            }
        }
        
        document.addEventListener('keydown', handleKeyPress)

        return() => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [tanggal, namaBarang, hargaSatuan, jumlah])


    const handleClick = () => {
        console.log('Tanggal:', tanggal)
        console.log('Nama Barang:', namaBarang)
        console.log('Harga Satuan:', hargaSatuan)
        console.log('Jumlah:', jumlah)
    
        setTanggal('')
        setNamaBarang('')
        setHargaSatuan('')
        setJumlah('')
    }

    return (
        <>
            <form>
                <h2>Data barang masuk</h2>
                <div>
                    <label htmlFor='Tanggal'>Tanggal:</label>
                    <input type='text' value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='Nama Barang'>Nama barang:</label>
                    <input type='text' value={namaBarang} onChange={(e) => setNamaBarang(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='Harga Satuan'>Harga Satuan:</label>
                    <input type='text' value={hargaSatuan} onChange={(e) => setHargaSatuan(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='Jumlah'>Jumlah:</label>
                    <input type='text' value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
                </div>
                <div>
                    <button type='button' onClick={handleClick}>enter</button>
                </div>
            </form>
            {/*
            <form>
                <h2>Data barang keluar</h2>
                <div>
                    <label htmlFor='Tanggal'>Tanggal:</label>
                    <input type='text' />
                </div>
                <div>
                    <label htmlFor='Nama Barang'>Nama barang:</label>
                    <input type='text' />
                </div>
                <div>
                    <label htmlFor='Harga Satuan'>Harga Satuan:</label>
                    <input type='text' />
                </div>
                <div>
                    <label htmlFor='Jumlah'>Jumlah:</label>
                    <input type='text' />
                </div>
                <div>
                    <button>enter</button>
                </div>
            </form>
            <form>
                <h2>Data customer</h2>
                <div>
                    <label htmlFor='Tanggal'>Tanggal:</label>
                    <input type='text' />
                </div>
                <div>
                    <label htmlFor='Nama Customer'>Nama Customer:</label>
                    <input type='text' />
                </div>
                <div>
                    <label htmlFor='Nama Barang'>Nama Barang:</label>
                    <input type='text' />
                </div>
                <div>
                    <label htmlFor='Harga Satuan'>Harga Satuan:</label>
                    <input type='text' />
                </div>
                <div>
                    <label htmlFor='Jumlah'>Jumlah:</label>
                    <input type='text' />
                </div>
                <div>
                    <button>enter</button>
                </div>
            </form>
             */}
        </>
    )
}

export default Storage

{/*
import { useState, useEffect } from 'react';

const Storage = () => {
  const [tanggal, setTanggal] = useState('');
  const [namaBarang, setNamaBarang] = useState('');
  const [hargaSatuan, setHargaSatuan] = useState('');
  const [jenis, setJenis] = useState('');
  const [jumlah, setJumlah] = useState('');

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [tanggal, namaBarang, hargaSatuan, jenis, jumlah]);

  const handleSubmit = () => {
    // Lakukan sesuatu dengan nilai yang diisi
    console.log('Tanggal:', tanggal);
    console.log('Nama Barang:', namaBarang);
    console.log('Harga Satuan:', hargaSatuan);
    console.log('Jenis:', jenis);
    console.log('Jumlah:', jumlah);

    // Reset nilai input setelah submit
    setTanggal('');
    setNamaBarang('');
    setHargaSatuan('');
    setJenis('');
    setJumlah('');
  };

  return (
    <form>
      <h2>Data barang masuk</h2>
      <div>
        <label htmlFor='Tanggal'>Tanggal:</label>
        <input type='text' value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
      </div>
      <div>
        <label htmlFor='Nama Barang'>Nama barang:</label>
        <input type='text' value={namaBarang} onChange={(e) => setNamaBarang(e.target.value)} />
      </div>
      <div>
        <label htmlFor='Harga Satuan'>Harga Satuan:</label>
        <input type='text' value={hargaSatuan} onChange={(e) => setHargaSatuan(e.target.value)} />
      </div>
      <div>
        <label htmlFor='Jenis'>Jenis:</label>
        <input type='text' value={jenis} onChange={(e) => setJenis(e.target.value)} />
      </div>
      <div>
        <label htmlFor='Jumlah'>Jumlah:</label>
        <input type='text' value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
      </div>
      <div>
        <button type='button' onClick={handleSubmit}>Enter</button>
      </div>
    </form>
  );
}

export default Storage*/}