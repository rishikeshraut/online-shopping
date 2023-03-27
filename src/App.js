import './App.css';
import React from 'react';


import Navbarmain from './component.js/Navbarmain';
import Category from './component.js/Category';
import Electronic from './component.js/Electronic';
import Cloth from './component.js/Cloth';
import Shooes from './component.js/shooes';


import {Routes,Route,Link} from 'react-router-dom';
import Dashboard from './component.js/Dashboard';
function App(){

    return (

      <div className='full'>
        <div className='bar'>
          <Navbarmain/>
        </div>
       
{          
        <div className='main'>

       
         
            
       <div className='sidebar'>
        
        
       <div>
        <Link to="/Electronic"style={{color:'white', textDecoration:'none',}}> Electronic</Link> <br/>
        <Link to="/Category"style={{color:'white', textDecoration:'none'}}>Category</Link> <br/>
        <Link to="/Cloth"style={{color:'white', textDecoration:'none'}}>Cloth</Link> <br/>
         <Link to="/Shooes"style={{color:'white', textDecoration:'none'}}>Shooes</Link> <br/>
       
        </div>
       </div>
       <div>
          <Dashboard/>
        </div>
       <div >   
      <Routes>
        <Route path='/category' element={<Category/>} />
        <Route path='/electronic' element={<Electronic/>} />
        <Route path='/cloth' element={<Cloth/>} />
        <Route path='/shooes' element={<Shooes/>} />
       
      </Routes>
      </div> 
        </div>
      }
      </div>
      
      
    );
}
export default App;