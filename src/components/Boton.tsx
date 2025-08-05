type Props = {
     isVisible: () => void;
     titulo: string;
}

export default function Boton({isVisible, titulo}: Props){
  
    return(
        <button onClick={isVisible}>{titulo}</button>
    )
}