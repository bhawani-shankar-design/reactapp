import './App.css';
import Navbar from './components/Navbar.js';
import Form from './components/Form'
import Alert from './components/Alert'
import React ,{ useState } from 'react';
// import About from './components/About.js';


// import {
//   BrowserRouter as Router,
//   Routes, // Replace 'Switch' with 'Routes'
//   Route,
// } from "react-router-dom";

function App() {
  const[Mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode =()=>{
    if(Mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#101d46'
      showAlert("DarK mode enable","success")
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode enable","success")
    }
  

  }
    return (
    <>
    {/* <Router> */}
    <Navbar title = "Bhawani" aboutText = "About us" home = " Home" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Form showAlert={showAlert} mode={Mode} />
    {/* <Routes> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/" element={<Form showAlert={showAlert} mode={Mode} />} /> */}
    {/* </Routes> */}
    
    {/* </Router> */}
    </>
  );
}


export default App;
