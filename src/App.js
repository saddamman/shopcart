import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Approuter";
import ModalContextProvider from "./providers/ModalContextProvider";
import ShpoContextProvider from "./providers/ShopContextProvider";

function App() {
  return (
    <ModalContextProvider>
      <ShpoContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </ShpoContextProvider>
    </ModalContextProvider>
  );
}

export default App;
