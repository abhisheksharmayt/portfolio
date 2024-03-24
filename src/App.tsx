import { useEffect, useState } from "react";
import Social from "./components/social/social";
import Terminal from "./components/terminal/Terminal";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [toggleTerminal, setToggleTerminal] = useState(false);
  const checkKeyValues = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "/") {
      setToggleTerminal(!toggleTerminal);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", checkKeyValues);
    return () => {
      document.removeEventListener("keydown", checkKeyValues);
    };
  });
  return (
    <>
      <Navbar/>
      <Social />
      {toggleTerminal && <Terminal />}
    </>
  );
}

export default App;
