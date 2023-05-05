import { Link, Outlet } from "react-router-dom";
import Menu from "./composant/Menu";

const App = () => {
  console.log(import.meta.env.VITE_API)
  return ( <>
    <Menu />
    <div className="page">
      <Outlet />
    </div>
    <footer>
      <Link to="/mention-legale">Mentions Légales</Link>
    </footer>
  </> );
}
 
export default App;