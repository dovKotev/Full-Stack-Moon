import {useState, useEffect} from "react";
// import jwtDecode from "jwt-decode";
import {getUser} from "../Services/userService";
import {setCommonHeader} from "../Services/httpServices";
import {useNavigate} from "react-router-dom";

function useUserStatus() {
  const [status, setStatus] = useState("unregistered");
  const [email, setEmail] = useState("");
  const [biz, setBiz] = useState(false);
  const [name, setName] = useState("");
  // const [id, setId] = useState("");
  const [cart, setCart] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    statusChanged();
  }, []);

  function signOut() {
    localStorage.removeItem("token");

    setStatus("unregistered");
    setName("");
    setEmail("");
    setBiz(false);

    navigate("/");
  }

  async function statusChanged() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setStatus("unregistered");
        return null;
      }
      // let details = jwtDecode(token);
      setCommonHeader("token", token);
      const {data} = await getUser();

      if (data.biz) {
        setStatus("Admin");
      } else {
        setStatus("Registreded");
      }

      setName(data.name);
      setEmail(data.email);
      setBiz(data.biz);
      setCart(data.cart);
    } catch {
      setStatus("unregistered");
      return null;
    }
  }
  return {status, email, biz, name, cart, statusChanged, signOut};
}

export default useUserStatus;
