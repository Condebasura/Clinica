type Props = {
    name: string;
    isActive: boolean;
}
export default function Chao({name , isActive}: Props){
    return name && isActive ? <h1 className="d-flex">Chao {name}</h1 >: <h1 className="d-none">Chao</h1>
}