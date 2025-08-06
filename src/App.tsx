import './App.css'
import { useState } from 'react';
import Form from './components/Form'
import Saludo from './components/Saludo'
import Boton from './components/Boton';
import Chao from './components/Despido';

export default function App(){

 const [activeH1 , setActiveH1] = useState(0);
 const [nameA, setNameA] = useState('');
 const [nameB, setNameB] = useState('');
 
 const activeName  = activeH1 === 0 ? nameA : nameB;
 const SetActiveName = activeH1 === 0 ? setNameA : setNameB;
  return(
    <>
    <div className='d-flex'>
     <Boton titulo='boton de hola' isVisible={()=> setActiveH1(0)}/>
     <Boton titulo='boton de chao' isVisible={()=> setActiveH1(1)}/>

    <div className='border border-5 p-5 '>
    <Form name={activeName} setName={SetActiveName}/>
    </div>
    <div className='border border-4 m-4 p-5 '>
   {nameA && <Saludo name={nameA}
    isActive={activeH1 === 0}
    />}
   
  
    </div>
    <div className='border border-4 m-4 p-5 '>
       {nameB && <Chao name={nameB}
   isActive={activeH1 === 1}
   />}
    </div>
    </div>
    
    </>
  )
}

