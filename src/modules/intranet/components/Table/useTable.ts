import { Option } from "@/interfaces/interfaces";

// type Option = {
//     title: string;
//     ct: string;
//     sub?: string;
// };

interface props {
  toggleOpen:()=>void,
  toggleViewAsignarCurso:()=>void,
  editItem:(index:number)=>void,
}

export const useTable = ( {toggleOpen,toggleViewAsignarCurso,editItem}: props) => {
  // const [header, setHeader] = useState<Array<HeaderTable>>([])

  // const [teachers, setTeachers] = useState<Array<Teacher>>([])
  // const [teacherOption, setTeacherOption] = useState<Array<Option>>([])

  /*CONFIG -- CURSOS */

  // const [headerCourse, setHeaderCourse] = useState<Array<HeaderTable>>([])

  // const [courses, setCourses] = useState<Array<Courses>>([])

  // const [courseOption, setCourseOption] = useState<Array<OptionCourse>>([])

  const headers = [
    { title: "No" },
    { title: "Nombre" },
    { title: "Cursos" },
    { title: "Habilitar" },
    { title: "Estado" },
  ];

  // const [showView, setShowView] = useState<boolean[]>([false, false, false]);
  

  // editarTituloFormDocente(title2)


  const options: Option[] = [
    {
      title: "Detalle",
      ct: "Contenido de la Opción 1",
      sub: "Detalle docente",
    },
    {
      title: "Editar",
      ct: "Contenido de la Opción 2",
      sub: "Editar docente",
      
    },
    {
      title: "Asignar curso",
      ct: "Contenido de la Opción 3",
      sub: "Asignar curso",
      
    },
    {
      title: "Deshabilitar",
      ct: "Contenido de la Opción 3",
    },
  ];

  const openView = (index:number) => {

    switch (index) {
      case 0:
      console.log('1.detalle');
      toggleOpen();
        break;
      case 1:
        console.log('2.editar');
        editItem(index)
        toggleOpen();
        break;
      case 2:
        console.log('3.asignar curso');
        // toggleViewAsignarCurso();
        break;
      case 3:
      console.log('4.deshabilitar');
        
        break;
      default:
        break;
    }

    // if (index===0) {
    //   toggleOpen();
    //   editTeacher(index)
    //   console.log('1.detalle');
    // } else if(index===1){
    //   editTeacher(index)
    //   console.log('2.editar');
    //   toggleAbierto();
    // }
    // else if(index===2){
    //   toggleViewAsignarCurso();
    //   console.log('3.asignarcurso');
    // }else{
    //   console.log('4.deshabilitar');
      
    }

  return {
    headers,
    options,
    openView,
   
  };
};
