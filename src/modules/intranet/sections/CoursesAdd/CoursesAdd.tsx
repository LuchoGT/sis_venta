import './CoursesAdd.scss'

interface props{
  isCourseAdd:boolean;
}
export const CoursesAdd = ({isCourseAdd}:props) => {
  return (
    <div className={`${isCourseAdd ? "courses-add" : 'hidden' }`} >CoursesAdd</div>
  )
}
