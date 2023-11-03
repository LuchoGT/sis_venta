import { Options } from "@/modules/intranet/pages/ReportesPage/interfaces";

export interface IconsNavBar {
    link: string
    title:string
  }

export interface HeaderTable{
  text:string
}

export interface ItemsTable{
  items: Array<Array<FormPruebas>>,
  button: Option[]
}

export interface Option{
  title: string;
  handler:string;
}


export interface FormPruebas{
  nombres: string;
  apellidos: string;
  dni: string;
  celular: string;
  correo: string;
  usuario: string;
  password: string;
  cursos?:Cursos[];
}

export interface FormCourses{
  nombres:string;
}

export interface Cursos{
  course:string;
  room:string;
}

export interface ItemsCourses{
  items:Array<Array<FormCourses>>
  button: Options[]
}
