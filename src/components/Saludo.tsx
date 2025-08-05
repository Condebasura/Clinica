type Props = {
    name: string;
    isActive:boolean;
}
export default function Saludo({name, isActive}: Props){
    return name && isActive ? <h1 className="d-flex">Hola {name}</h1>: <h1 className="d-none">Hola</h1>;
}