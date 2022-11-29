import Home from "../Pages/Home";
import About from "../Pages/About";
import Sign from "../Pages/Sign";
import MemoryGame from "../Pages/MemoryGame";
import MoonPhase from "../Pages/MoonPhase";
import MoonShop from "../Pages/MoonShop";
import Question from "../Pages/Question";
import Register from "../Pages/Register";
import RegisterAdmin from "../Pages/RegisterAdmin";
import TriviaGame from "../Pages/TriviaGame";
import CreateCard from "../Pages/CreateCard";
import CardDetails from "../Pages/CardDetails";
import Cart from "../Pages/Cart";

const pages = [
  {name: "Home", path: "/", component: Home},
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "Register-Admin",
    path: "/register-admin",
    component: RegisterAdmin,
  },
  {
    name: "Create-card",
    path: "/create-card",
    component: CreateCard,
  },
  {
    name: "Signin",
    path: "/signin",
    component: Sign,
  },

  {
    name: "Register",
    path: "/register",
    component: Register,
  },
  {
    name: "Memory Game",
    path: "/memory-game",
    component: MemoryGame,
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
  },
  {
    name: "Trivia Game",
    path: "/trivia-game",
    component: TriviaGame,
  },
  {
    name: "Moon Phase",
    path: "/moon-phase",
    component: MoonPhase,
  },
  {
    name: "Question",
    path: "/question",
    component: Question,
  },
  {
    name: "MoonShop",
    path: "/moon-shop",
    component: MoonShop,
  },
  {
    name: "Card",
    path: "/moon-shop/:id",
    component: CardDetails,
  },
  {
    name: "Cart",
    path: "/moon-shop/cart",
    component: Cart,
  },
];

export default pages;
