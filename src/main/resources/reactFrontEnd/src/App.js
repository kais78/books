import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer.js";
import Books from "./component/Books.js";
import BookContextProvider from './contexts/BookContextProvider';
import ShowBook from "./component/ShowBook.js";
import AddBook from "./component/AddBook.js"





function App() {
  return (
    <div className="App">
      <BookContextProvider>
      <Router>
        <Navbar />
        <Route exact path="/" component={Books} />
        <Route exact path="/:id" children={<ShowBook />} />
        <Route exact path="/new" component={AddBook} />
        <Footer />
      </Router>
      </BookContextProvider>
    </div>
  );
}

export default App;
