import "./Navbar.css";
import {Link} from "react-router-dom";
import useCurrentPage from "../../Hooks/useCurrentPage";

function Navbar({status, name, signOut}) {
  const {currentPage, changePage} = useCurrentPage();
  const userName = status === "unregistered" ? "Visitor" : name;

  return (
    <>
      <header className="header-style">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
        <div className="star star-7"></div>
        <div className="star star-8"></div>
        <div className="star star-9"></div>
        <div className="star star-10"></div>
        <div className="star star-11"></div>
        <div className="star star-12"></div>

        <h1>The Moon</h1>
        <img
          src="https://nineplanets.org/wp-content/uploads/2019/09/moon.png"
          alt="The moon"
          width={"120px"}
        />
        <nav
          className="navbar navbar-expand-lg navbar-dark font-style pb-3"
          style={{maxWidth: "900px", margin: "0 auto", paddingBottom: "0px"}}
        >
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">
                <li
                  className={"nav-item " + (currentPage === "/" && "bar-focus")}
                >
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={() => changePage("/")}
                  >
                    Home
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                <li
                  className={
                    "nav-item " + (currentPage === "/about" && "bar-focus")
                  }
                >
                  <Link
                    className="nav-link"
                    to="about"
                    onClick={() => changePage("/about")}
                  >
                    About
                  </Link>
                </li>
                <li
                  className={
                    "nav-item " + (currentPage === "/moon-shop" && "bar-focus")
                  }
                >
                  <Link
                    className="nav-link"
                    to="moon-shop"
                    onClick={() => changePage("/moon-shop")}
                  >
                    MoonShop
                  </Link>
                </li>
                <li
                  className={
                    "nav-item " + (currentPage === "/moon-phase" && "bar-focus")
                  }
                >
                  <Link
                    className="nav-link"
                    to="moon-phase"
                    onClick={() => changePage("/moon-phase")}
                  >
                    MoonPhases
                  </Link>
                </li>
                <li
                  className={
                    "nav-item " + (currentPage === "/question" && "bar-focus")
                  }
                >
                  <Link
                    className="nav-link"
                    to="question"
                    onClick={() => changePage("/question")}
                  >
                    Questions
                  </Link>
                </li>
                <li
                  className={
                    "nav-item dropdown " +
                    (currentPage === "/games" && "bar-focus")
                  }
                >
                  <Link
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Games
                  </Link>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="memory-game">
                      Memory game
                    </Link>
                    <Link className="dropdown-item" to="trivia-game">
                      Trivia
                    </Link>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav">
                {/* bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb */}
                <li
                  className={
                    "nav-item dropdown " +
                    (currentPage === "/games" && "bar-focus")
                  }
                >
                  <Link
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {userName}
                  </Link>
                  <div className="dropdown-menu">
                    {status === "unregistered" && (
                      <>
                        <Link
                          className="dropdown-item"
                          to="signin"
                          onClick={() => changePage("/signin")}
                        >
                          Signin
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="register"
                          onClick={() => changePage("/register")}
                        >
                          Register
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="register-admin"
                          onClick={() => changePage("/register-admin")}
                        >
                          RegisterAdmin
                        </Link>
                      </>
                    )}
                    {!(status === "unregistered") && (
                      <div
                        style={{cursor: "pointer"}}
                        className="dropdown-item"
                        onClick={() => signOut()}
                      >
                        Sign Out
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
