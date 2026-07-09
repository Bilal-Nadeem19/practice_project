import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
function App() {
    return (
        <>
            <Navbar />
            <AppRoutes />
            <Footer />
        </>
    );
}

export default App;