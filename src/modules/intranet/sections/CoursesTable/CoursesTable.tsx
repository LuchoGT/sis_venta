import { OptionIcon } from "@/assets/icon/OptionIcon";
import { useCourseTable } from "./useCourseTable";
import { useState } from "react";

export const CoursesTable = () => {
  const { header, courses,courseOption } = useCourseTable();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="table">
        <div className="table__headers">
          {header.map((item, index) => (
            <div key={index}>{item.text}</div>
          ))}
        </div>
        <div className="table__items">
          {courses.map((item, index) => (
            <div key={index} className="table__item">
              <div>{index + 1}</div>
              <div>{item.curso}</div>
              <div>{item.estado}</div>
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="table__item--rel"
              >
                <OptionIcon />
                <ul
                  className={`${
                    isMenuOpen ? "menu-option" : "menu-option--hidden"
                  }`}
                >
                  {courseOption.map((item, index) => (
                    <li
                      key={index}
                      className="menu-option__item"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
