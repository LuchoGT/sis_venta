export interface Practica{
    items: Array<Array<FormDatos>>,
    button: Options[]
}

export interface FormDatos{
    nombre:string;
    apellido:string;
    countries?:Countries[];
}

export interface Countries{
    departamento:string;
    distrito:string;
}

export interface Options{
    title:string;
    handler:string;
}

export interface FormDatos2{
    nombre:string;
}

export interface Practica2{
    items: Array<Array<FormDatos2>>,
    button: Options[]
}