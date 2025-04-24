import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { AuthProvider } from "./Components/AuthContext";
import AuthGuard from "./Components/AuthGuard";
import Homepage from "./Pages/Homepage";
import Registerpage from "./Pages/Registerpage";
import Loginpage from "./Pages/Loginpage";
import Adminhomepage from "./Pages/Adminhomepage";
import { Detailspage } from "./Pages/Detailspage";
import Viewcartpage from "./Pages/Viewcartpage";
import Createproduct from "./Pages/Createproduct";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthGuard><Homepage /></AuthGuard>} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/Register" element={<Registerpage/>} />
            <Route path="/movies/:id" element={<Detailspage/>} />
            <Route path="/admin" element={<AuthGuard><Adminhomepage/></AuthGuard>}/>
            <Route path="/cart" element={<Viewcartpage/>}/>
            <Route path="/addproduct" element={<Createproduct/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
