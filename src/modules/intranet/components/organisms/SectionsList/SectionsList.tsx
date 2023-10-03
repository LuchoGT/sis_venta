
interface props{
  isCourseOpen:boolean
}
export const SectionsList = ({isCourseOpen}:props) => {
  return (
    <div className={`${isCourseOpen ? 'hidden' : ''}`}>SectionsList</div>
  )
}
