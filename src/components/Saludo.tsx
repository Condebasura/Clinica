type Props = {
    name: string;
    isActive:boolean;
    
}

export default function Saludo({name, isActive}: Props){

 if(!isActive) return null;
    return (

        <h1>Hola {name || ''}</h1>
    )
        
}