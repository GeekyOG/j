import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
