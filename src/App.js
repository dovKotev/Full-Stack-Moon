import "./App.css";
import Navbar from "./Components/Header/Navbar";
import SwichPages from "./Pages/SwichPages";
import Footer from "./Components/Footer/Footer";

import useUserStatus from "./Hooks/useUserStatus";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const {status, email, biz, name, cart, id, statusChanged, signOut} =
    useUserStatus();

  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer />
      <Navbar
        status={status}
        email={email}
        biz={biz}
        name={name}
        signOut={signOut}
      />
      <main className="flex-fill main-style pb-5">
        <SwichPages
          status={status}
          email={email}
          biz={biz}
          name={name}
          id={id}
          cart={cart}
          statusChanged={statusChanged}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
