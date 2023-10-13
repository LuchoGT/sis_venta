import { TeacherAddContent } from '../../components/TeacherAddContent/TeacherAddContent';
import { TeacherDetail } from '../../components/TeacherAddContent/TeacherDetail';
import { TeacherEditContent } from '../../components/TeacherAddContent/TeacherEditContent';
import './TeacherAdd.scss';

interface props{
  toggleAbierto:()=>void,
  value:string
}
export const TeacherAdd = ({toggleAbierto,value}:props) => {

  let pruebas;

  switch (value) {
    case 'Agregar':
      pruebas = <TeacherAddContent  toggleAbierto={toggleAbierto}/>;
      break;
    case 'Editar':
      pruebas = <TeacherEditContent  toggleAbierto={toggleAbierto}/>;
      break;
    case 'Detalle':
      pruebas = <TeacherDetail toggleAbierto={toggleAbierto}/>;
      break;
    default:
      pruebas = <div>Valor no válido</div>;
  }


  return (
    <div>{pruebas}</div>
  )
}
