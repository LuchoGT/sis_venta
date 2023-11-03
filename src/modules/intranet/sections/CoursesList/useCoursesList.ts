import { FormCourses, ItemsCourses, ItemsTable } from "@/interfaces/interfaces";
import { useState,useEffect } from "react";

export const useCoursesList = () => {
    const [header] = useState<Array<string>>(["N°", "Curso", "Estado", "Acciones"]);
    const [data,setData] = useState<ItemsCourses>(
      {
        items: [
        ],
        button: [
          {
            title:"Deshabilitar",
            handler:'Deshabilitar'
          }
        ]
      }
    );

    const updateData = (newData: ItemsCourses) => {
      setData(newData);
      localStorage.setItem('coursesList',JSON.stringify(newData));
    };
    
    const handleAdd = (formData: FormCourses) => {
      const updatedData = { ...data };
      updatedData.items.push(formData);
      updateData(updatedData);
    };

    useEffect(() => {
      const savedData = localStorage.getItem('coursesList');
      if (savedData) {
        setData(JSON.parse(savedData));
      }
    }, []);
  

    return{
        header,
        data,
        handleAdd
    }
}
