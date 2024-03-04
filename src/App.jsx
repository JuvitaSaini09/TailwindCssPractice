import "./App.css";
import Button from "@mui/material/Button";
import Chitchat from "./components/Chitchat/Chitchat";
import { Route, Routes, Link } from "react-router-dom";
import FunUi from "./components/FunUi/FunUi";
import Navbar from "./components/NavBar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-red-400 pb-5 min-h-screen">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold underline mt-20">
            Tailwind CSS Practice
          </h1>
        </div>

        <div className="flex justify-center mt-10 gap-5">
          <Link
            to="/"
            className="border-2 border-black text-black bg-yellow-300 p-2"
          >
            Go to Chit Chat Page
          </Link>

          <Link to="/funui" className="border-2 border-black bg-yellow-300 p-2">
            Go to Fun UI Page
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Chitchat />} />
          <Route path="/funui" element={<FunUi />} />
          <Route path="*" element={<h1>Wrong Route !!</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
