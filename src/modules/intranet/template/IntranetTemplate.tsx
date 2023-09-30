interface props{
    children: JSX.Element | JSX.Element[]
}

export const IntranetTemplate = ({children}:props) => {
  return (
    <div>
        {children}
    </div>
  )
}
