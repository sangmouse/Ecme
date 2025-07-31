import { Outlet } from "react-router-dom";
import style from "../styles/LayoutRoot.module.scss";

export default function LayoutRoot() {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}
