import { Outlet } from "react-router-dom";
import Menu from "../menu/Menu";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className="main">
      <NavBar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;