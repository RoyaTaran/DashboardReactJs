import { useRoutes } from "react-router-dom";
import "./App.css";
import Routers from "./router";
import Topbar from "./components/Topbar/TopBar";
import Sidebar from "./components/Sidebar/Sidebar";
// import CreatProductForm from "./components/Form/CreatProductForm"

function App() {
  let routers = useRoutes(Routers);
  return (
    // <CreatProductForm/>
    <>
      <div className="TapbarComponent">
        <Topbar />
      </div>
      <div className="ContentComponents">
        <Sidebar className="sidebar" />

        <div className="content">{routers}</div>
      </div>
    </>
  );
}

export default App;
