
interface props{
    value:string;
}
export const SwitchComponente = ({value}:props) => {
  
  let content;

  switch (value) {
    case 'option1':
      content = <div>Contenido de la opción 1</div>;
      break;
    case 'option2':
      content = <div>Contenido de la opción 2</div>;
      break;
    case 'option3':
      content = <div>Contenido de la opción 3</div>;
      break;
    default:
      content = <div>Valor no válido</div>;
  }

    return (
    <div>{content}</div>
  )
}
