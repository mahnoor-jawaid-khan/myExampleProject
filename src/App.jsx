import React, {useState, createContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import BasicExample from './Components/Navbar'
import Header from './Components/Header';


function App() {
  // let [mode, setMode] = useState('light')
  // let [btnText, setBtnText] = useState('Set  Dark Mode')
  // const changeMode = () => {
  //   if(mode == 'light'){
  //     setMode('dark')
  //     setBtnText('Set light mode')
  //     document.body.style.backgroundColor = 'black'
  //     document.body.style.color = 'white'
  //   }
  //   else{
  //     setMode('light')
  //     setBtnText('Set Dark mode')
  //          document.body.style.backgroundColor = 'white'
  //     document.body.style.color = 'black'
  //   }
  // }

  return (
    // We will write JSX code here
    <>


    <BasicExample/>
    <Header/>
    </>
  )

}



export default App
