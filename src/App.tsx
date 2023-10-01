import { Outlet } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};
