import React, { useEffect, useState } from "react";
import Navigation from "./navigation";

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const handleHeaderFixed = () => {
    const currantScroll = window.scrollY;
    if (currantScroll > 100) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleHeaderFixed);
    // console.log("notCleanup");

    return () => {
      window.removeEventListener("scroll", handleHeaderFixed);
      // console.log("cleanup");
    };
  }, []);
  return (
    <header className={`header shadow-sm${isHeaderFixed ? " FixedHeader" : ""}`}>
      <Navigation />
    </header>
  );
};

export default Header;
