import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AppRoute } from "./router/routes";

function App() {
  return <RouterProvider router={AppRoute} />;
}

export default App;
