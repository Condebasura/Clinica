import './App.css'
import { useState } from 'react';
import Form from './components/Form'
import Saludo from './components/Saludo'
import Despido from './components/Despido'
import Boton from './components/Boton';

export default function App(){
 const [name, setName] = useState('');
 const [activeH1 , setActiveH1] = useState(0);

 // intentar que se pueda cambiar de espacio de escritura estando el campo de input relleno. 

  return(
    <>
    <div className='d-flex'>
     <Boton titulo='boton de hola' isVisible={()=> setActiveH1(0)}/>
     <Boton titulo='boton de chao' isVisible={()=> setActiveH1(1)}/>

    <div className='border border-5 p-5 '>
    <Form name={name} setName={setName}/>
    </div>
    <div className='border border-4 m-4 p-5 '>
   {name && <Saludo name={name}
    isActive={activeH1 === 0}
    />}
   
  
    </div>
    <div className='border border-4 m-4 p-5 '>
       {name && <Despido name={name}
   isActive={activeH1 === 1}
   />}
    </div>
    </div>
    
    </>
  )
}

