interface props{
  toggleMenu:()=>void,
}
export const OptionIcon = ({toggleMenu}:props) => {
  return (
    <svg
    onClick={toggleMenu}
      xmlns="http://www.w3.org/2000/svg"
      className="option-icon icon icon-tabler icon-tabler-dots-vertical"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
      <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
      <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    </svg>
  );
};
