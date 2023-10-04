import { Outlet } from "react-router-dom";
import "./IntranetTemplate.scss";
import { NavbarIntranet } from "../sections/NavbarIntranet/NavbarIntranet";
import { HeaderIntranet } from "../sections/HeaderIntranet/HeaderIntranet";

export const IntranetTemplate = () => {
  return (
    <div className="intranetTemplate">
      <NavbarIntranet />
      <div className="intranetTemplate__main">
        <HeaderIntranet />
        <Outlet />
      </div>
    </div>
  );
};
