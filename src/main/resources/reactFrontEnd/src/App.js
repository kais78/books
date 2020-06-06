import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer.js";
import Books from "./component/Books.js";
import BookContextProvider from './contexts/BookContextProvider'





function App() {
  return (
    <div className="App">
      <BookContextProvider>
      <Router>
        <Navbar />
        <Route exact path="/" component={Books} />
        <Footer />
      </Router>
      </BookContextProvider>
    </div>
  );
}

export default App;
