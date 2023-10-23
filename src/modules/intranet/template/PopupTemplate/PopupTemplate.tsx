import './PopupTemplate.scss'

interface props {
  tooglePopUp: () => void;
  title: string;
  children: JSX.Element;
}

export const PopupTemplate = ({ title, tooglePopUp, children }: props) => {

  return (
    <div className="popUp">
      <div className="popUp__container">
        <div className="popUp__head">
          <p className="popUp__title">{title}</p>
          <svg
            onClick={tooglePopUp}
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
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
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
};
