import React from 'react';
import logo from './logo.svg';
import image from './Profile/kacem.jpg';
import './App.css';
import Exemple from './Profile/Exemple';



function App() {

  return (
    <div className="App">
      <Exemple fullName='hamdi KACEM' Bio='devenir un developpeur' Profession='developpeur web' >
      <img className='img' src={image} alt='this is my img' style={{width:"280px"}}/>
    </Exemple>
    </div >
  );
}
export default App;
