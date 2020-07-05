import React from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      countPegawai : 0,
      namePengguna : 'ilman',
      statusPengguna : true,
      menuNav : ''
    }
    this.tambahCount = this.tambahCount.bind(this)
    this.kurangCount = this.kurangCount.bind(this)
    this.navAbout = this.navAbout.bind(this)
    this.ubahNama = this.ubahNama.bind(this)
    this.setPenggunaName = this.setPenggunaName.bind(this)
  }
  setPenggunaName(inputNama){
    this.setState(
      {
        namePengguna : inputNama.target.value
      }
    )
  }
  ubahNama(){
    this.setState(
      {
        namePengguna :'ilman ganteng'
      }
    )
  }
  navAbout(){
    this.setState(
      {
        menuNav : 'about',
      }
    )
  }
  tambahCount(){
    this.setState(
      {
        countPegawai : this.state.countPegawai + 1
      }
    )
  }
  kurangCount(){
    this.setState(
      {
        countPegawai : this.state.countPegawai - 1
      }
    )
  }
  render(){
  
    return(
      <React.Fragment>
        <Header/>
        <Content setPenggunaName={this.setPenggunaName} ubahNama={this.ubahNama} kurangCount = {this.kurangCount} tambahCount = {this.tambahCount} countPegawai={this.state.countPegawai} namePengguna = {this.state.namePengguna}/>
      </React.Fragment>
    )
    
  }
}
export default App