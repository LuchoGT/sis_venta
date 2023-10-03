import { Outlet } from "react-router-dom";
import { HeaderIntranet } from "../components/organisms/HeaderIntranet/HeaderIntranet";
import { NavbarIntranet } from "../components/organisms/NavbarIntranet/NavbarIntranet";
import "./IntranetTemplate.scss";

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
