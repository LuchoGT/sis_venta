import { useState } from "react"

export const useConfig = () => {

    const [isCourseOpen, setIsCourseOpen] = useState<boolean>(true);

    const closeCourse=()=>setIsCourseOpen(false);
    const openCourse=()=>setIsCourseOpen(true);
  return {
    isCourseOpen,
    closeCourse,
    openCourse
  }
}
