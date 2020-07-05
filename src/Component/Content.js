import React from 'react'
import Form from './Form'
function Content(props){
    return(
        <React.Fragment>
            <h3>Selamat Datang {props.namePengguna}</h3>
            <p>Count : {props.countPegawai}</p>
            <button onClick={props.tambahCount}>Tambah</button>
            <button onClick={props.kurangCount}>Kurang</button>
            <button onClick={props.ubahNama}>Ubah Nama</button>
            <Form namePengguna= {props.namePengguna} setPengguna={props.setPenggunaName}/>
        </React.Fragment>
    )
}
export default Content