import { TeacherAddContent } from '../../components/TeacherAddContent/TeacherAddContent';
import { TeacherDetail } from '../../components/TeacherAddContent/TeacherDetail';
import { TeacherEditContent } from '../../components/TeacherAddContent/TeacherEditContent';
import './TeacherAdd.scss';

interface props{
  isView:boolean,
  value:string,
  closeViewAdd:()=>void,
  isViewEdit:boolean,
  closeEdit:()=>void,
  isViewDetail:boolean,
  closeDetail:()=>void
}
export const TeacherAdd = ({isView,value,closeViewAdd,isViewEdit,isViewDetail,closeEdit,closeDetail}:props) => {

  let pruebas;

  switch (value) {
    case 'Agregar':
      pruebas = <TeacherAddContent isView={isView} closeView={closeViewAdd}/>;
      break;
    case 'Editar':
      pruebas = <TeacherEditContent isViewEdit={isViewEdit} closeEdit={closeEdit}/>;
      break;
    case 'Detalle':
      pruebas = <TeacherDetail isViewDetail={isViewDetail} closeDetail={closeDetail}/>;
      break;
    default:
      pruebas = <div>Valor no válido</div>;
  }


  return (
    <div>{pruebas}</div>
  )
}
