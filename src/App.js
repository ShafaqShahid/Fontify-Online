import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import Footer from './Components/Footer';

function App() {
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const[mode,setdMode]=useState(`light`);
 
  const toggleMode=()=>{
    if(mode===`light`){
      setdMode(`dark`)
      document.body.style.backgroundColor="black";
    }
      else{
      setdMode(`light`)
      document.body.style.backgroundColor="white";
      document.body.style.p="black";
    }
    }
  
  return (
    <Router>

        <Navbar title="Fontify Online" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
        <Routes>
          <Route path="/Fontify Online" element={<TextForm showAlert={showAlert}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
