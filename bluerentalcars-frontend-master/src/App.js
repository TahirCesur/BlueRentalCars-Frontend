import React from "react";
import Footer from "./components/common/Footer";
import MenuBar from "./components/common/MenuBar";
import TopBar from "./components/common/TopBar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <TopBar />
      <MenuBar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
