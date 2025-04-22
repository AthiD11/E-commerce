import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { AuthProvider } from "./Components/AuthContext";
import AuthGuard from "./Components/AuthGuard";
import Homepage from "./Pages/Homepage";
import Registerpage from "./Pages/Registerpage";
import Loginpage from "./Pages/Loginpage";
import Adminhomepage from "./Pages/Adminhomepage";
import Detail from "./Components/details";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthGuard><Homepage /></AuthGuard>} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/Register" element={<Registerpage/>} />
            <Route path="/movies/:id" element={<Detail/>} />
            <Route path="/admin" element={<AuthGuard><Adminhomepage/></AuthGuard>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
