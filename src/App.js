import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Approuter";
import ModalContextProvider from "./providers/ModalContextProvider";

function App() {
  console.log("app is logged !");
  return (
    <ModalContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ModalContextProvider>
  );
}

export default App;
