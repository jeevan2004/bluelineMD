import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/fontawesome/css/fontawesome.min.css";
import "./assets/fontawesome/css/all.min.css";
import WOW from "wowjs";
import "animate.css/animate.min.css";

import "./App.css";
import Routes from "./router/Routes";
import Cursor from "./Components/customCursor/Cursor";
import { useCallback, useEffect } from "react";

function App() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
      triggerOnce: false,
      threshold: 0.5,
    });
    wow.init();
  }, []);
  return (
    <>
      <Cursor />
      <Routes />
    </>
  );
}

export default App;
