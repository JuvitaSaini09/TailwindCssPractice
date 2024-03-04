import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Navbar = () => {
  return (
    <nav className="h-16 top-0 w-full flex items-baseline bg-yellow-300 border-4 border-black fixed z-10">
      <div>
        <ArrowBackIcon  />
      </div>
    </nav>
  );
};

export default Navbar;
