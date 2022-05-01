import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Header } from './pages/shared/Header';
import { Popup } from './pages/shared/Popup/Popup';




function App() {
  return (
    <>   
     <div className='class_container'>
       {/* <Popup/> */}
    <div className="container">
      <Header/>
      <Routes>
      <Route  path="/" element={<Home/>}></Route>  
      </Routes>
    </div>
    </div>
    </>

  );
}

export default App;
