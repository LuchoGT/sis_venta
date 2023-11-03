import { ItemsTable, Option } from "@/interfaces/interfaces";

interface props{
  header:Array<string>;
  // itemsTable:Array<ItemsTable>
}


export const useTable = ({header,itemsTable}:props) => {
  // const [header, setHeader] = useState<Array<HeaderTable>>([])

  // const [teachers, setTeachers] = useState<Array<Teacher>>([])
  // const [teacherOption, setTeacherOption] = useState<Array<Option>>([])

  /*CONFIG -- CURSOS */

  // const [headerCourse, setHeaderCourse] = useState<Array<HeaderTable>>([])

  // const [courses, setCourses] = useState<Array<Courses>>([])

  // const [courseOption, setCourseOption] = useState<Array<OptionCourse>>([])

  // const headers = [
  //   { title: "No" },
  //   { title: "Nombre" },
  //   { title: "Cursos" },
  //   { title: "Habilitar" },
  //   { title: "Acciones" },
  // ];


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

  // const pc = itemsTable.map((item:string)=>({title:item}));

  const headers = header.map((item) => ({ title: item }));

  


  return {
    options,
    headers
  };
};
