import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Support from "./components/Support/Support";
import Infor from "./components/Infor/Infor";
import Lounge from "./components/Lounge/Lounge";
import Travelers from "./components/Travelers/Travelers";
import Subcribers from "./components/Subcribers/Subcribers";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Search />
      <Support />
      <Infor />
    </>
  );
}

export default App;
