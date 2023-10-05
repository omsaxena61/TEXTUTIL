
import React,{ useCallback, useState } from 'react';
import './Appa.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
import About from './Component/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

// import About from './Component/About';





function App() {
  const [state, setstate] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type 
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  }
   
  const toggleMode= ()=>{
    if(state=== 'light')
    {
      setstate('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title= 'TextUtils- Dark Mode';
      // setTimeout(() => {
      //   document.title='Text editer is amazing mode'
      // }, 2000);
      // setTimeout(() => {
      //    document.title='install Text Editor now'
      // }, 1500);

    }
    else
    {
      setstate('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
      // document.title= 'TextUtils- Light Mode';


    }

  }
  return (
    <>
    <Router>
    <Navbar title="Text Editer" Home= " HOMES"aboutText="About" mode={state} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-2">
    <Switch> 
      {
           <>
           <Route exact path="/about">
                <About  mode={state}/>
              </Route>
              <Route exact path="/">
                  <TextForm heading="Try TextUtils - Word Counter, character Counter,Remove extra spaces" btn="convert to lowercase" btn1="convert to uppercase" btn2="clear text" btn3="reverse strng" mode={state} showAlert={showAlert} />

                </Route>
                </> 
}
         </Switch>  
          
      </div>
        </Router> 
      {/* <About/> */}
     
    </>
  );
    
}

export default App;
