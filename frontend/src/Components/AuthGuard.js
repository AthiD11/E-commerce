import {jwtDecode} from "jwt-decode"
import { useEffect } from "react"
import { useNavigate } from "react-router"

const AuthGuard = ({ children }) => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token) {
        try {
          const decoded = jwtDecode(token);
          const now = Date.now() / 1000; 
  
          if (decoded.exp < now) {
            
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("role")

            navigate("/login");
          }
        } catch (err) {
           
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("role")
          navigate("/login");
        }
      } else {
        
        navigate("/login");
      }
    }, [navigate]);
  
    return children;
  };
  
  export default AuthGuard;  