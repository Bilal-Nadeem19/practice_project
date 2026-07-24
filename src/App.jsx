import { useLocation } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const location = useLocation();

  const hideLayoutRoutes = [
    "/login",
    "/get-started",
    "/forgot-password",
  ];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <AppRoutes />

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;