import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Single from "./pages/Single";
import Write from "./pages/Write";
import './sass/style.scss';
import Blog from "./pages/Blog";


const Layout = ({children}) => {
  return(<> <Navbar/>
  <Outlet/>
  {children}
  <Footer/>
  </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Home will not use Layout by default
  },
  {
    path: "/blog",
    element: <Layout><Blog /></Layout>, // Blog will use Layout
  },
  {
    path: "/post/:id",
    element: <Layout><Single /></Layout>,
  },
  {
    path: "/write",
    element: <Layout><Write /></Layout>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
  <div className="app">
    <div className="container"><RouterProvider router={router}/></div></div>
  )
}

export default App
