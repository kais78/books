import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer.js";
import Attractions from "./component/Attractions.js";
import FilmList from "./component/FilmList.js";





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Attractions/>
        <Route exact path="/" component={FilmList} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
