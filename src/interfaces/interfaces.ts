export interface IconsNavBar {
    link: string
    title:string
  }

export interface HeaderTable{
  text:string
}

export interface Option{
  title: string;
  ct: string;
  sub?: string;
  // fn: (index:number) => void | (() => Promise<void>);
}

export interface FormPruebas{
  nombres: string;
  apellidos: string;
  dni: string;
  celular: string;
  correo: string;
  usuario: string;
  password: string;
}