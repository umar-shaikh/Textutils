
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Popup from './components/Popup';




function App() {
  const [mode, setMode] = useState('light');
  const [popup, setPopup] = useState(null)

  const showPopup = (message, type) =>{
    setPopup({
      msg: message,
      type : type
    })

    setTimeout(() => {
      setPopup(null);
    }, 2000);

  }

 const toggleMode =() =>{
    if (mode === 'light') {
      setMode ('dark')
      document.body.style.backgroundColor = '#042743'

      showPopup("Dark mode has been enabled", "success")
    }

    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white'
      showPopup("Light mode has been enabled", "success")
    }
  }
  return (
   <>  
  
   <Navbar title="Textutils"   mode={mode} toggleMode={toggleMode}/>
   <Popup popup={popup}/>
   <div className="container my-5">
    
    <Textform showPopup={showPopup} heading= "Enter the text here" mode={mode} />
   
   </div>
   
   </>


  );
}

export default App;
