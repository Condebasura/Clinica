type Props ={
    name: string;
    setName: (value: string) => void;
}

export default function Form({name, setName}: Props){

   



    return(
        <>
           <input className="mt-4" value={name} onChange={(e) => setName(e.target.value)}/>
           
        </>
    )
}