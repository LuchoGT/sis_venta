
interface props{
title:string,
content:string,
onClose:()=>void,
}
export const SwitchComponente = ({title,content,onClose}:props) => {
  
  // let content;

  // switch (value) {
  //   case 'option1':
  //     content = <div>Contenido de la opción 1</div>;
  //     break;
  //   case 'option2':
  //     content = <div>Contenido de la opción 2</div>;
  //     break;
  //   case 'option3':
  //     content = <div>Contenido de la opción 3</div>;
  //     break;
  //   default:
  //     content = <div>Valor no válido</div>;
  // }

    return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  )
}
