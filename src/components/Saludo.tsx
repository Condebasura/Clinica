type Props = {
    name: string;
}
export default function Saludo({name}: Props){
    return name ? <h1>Hola {name}</h1>: <h1>Hola</h1>;
}