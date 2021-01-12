import React,{ useState,useEffect } from 'react'

import './App.css'
import About from "./About"
import Contact from './Contact.component'
import Navbar from './Navbar.component';
// import { logo } from '../public/logo192.png' 


function App() {
  const [name,setName] = useState("nidhi");
  const [number,setNumber] = useState(0);

  function onChangeName(){
     setName("Sourav");
  }
  function sendfunction(){
    console.log("this is props function");
  }
  useEffect(()=>{
    console.log(` ${number} `);
  })
  return (
    <div className="row p-5">
     <div className="col-md-6 border">
            <Contact sendName={ name }  sendfun={ sendfunction }/>

            <button onClick={onChangeName}>Set Name</button>
            
     </div>
     <div className="col-md-6 border">
       <About sendNumber={number}/>
      <button onClick={()=>{
        setNumber(number+1);
      }}>Set Number</button>
     </div>
    </div>
    // <React.Fragment>
    //   <Navbar/>
    // </React.Fragment>

  );
}

export default App;
