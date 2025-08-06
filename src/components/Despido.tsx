type Props = {
    name: string;
    isActive: boolean;
}
export default function Chao({name , isActive}: Props){
    if(!isActive) return null;
    return (

        <h1>Chao {name || ''}</h1>
    )
        

    
}