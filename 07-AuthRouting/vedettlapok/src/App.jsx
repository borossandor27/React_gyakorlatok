import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

// Komponensek
import Navbar from "./layout/Navbar";
import Main from "./layout/Main";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
