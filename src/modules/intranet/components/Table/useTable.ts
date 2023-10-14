import { Option } from "@/interfaces/interfaces";

// type Option = {
//     title: string;
//     ct: string;
//     sub?: string;
// };



export const useTable = () => {
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


  const options: Option[] = [
    {
      title: "Detalle",
      handler:'Detalle'
    },
    {
      title: "Editar",
      handler:'Editar'
      
    },
    {
      title: "Asignar curso",
      handler:'Asignar'
      
    },
    {
      title: "Deshabilitar",
      handler:'viewDetail'
    },
  ];



  return {
    headers,
    options,
  };
};
