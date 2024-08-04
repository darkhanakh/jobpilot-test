import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
