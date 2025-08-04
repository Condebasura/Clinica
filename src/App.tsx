import './App.css'
import { useState } from 'react';
import Form from './components/Form'
import Saludo from './components/Saludo'

export default function App(){
 const [name, setName] = useState('');
  return(
    <>
    <div className='d-flex'>

    <div className='border border-5 p-5 '>
    <Form name={name} setName={setName}/>
    </div>
    <div className='border border-4 m-4 p-5'>
    <Saludo name={name}/>
    </div>
    </div>
    
    </>
  )
}

