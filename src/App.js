import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainBox from "./Components/MainBox";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Blog from "./Components/Blog";
import Social from "./Components/Social";

function App() {
  return (
    <>

       {/* <Router>
       <Social/>

        <Routes>
           <Route exact path="/" element={<Project/>}></Route>
        </Routes>
      </Router>  */}
      <Router>
      <Navbar />

        <Routes>
          
          <Route exact path="/Social" element={<Social/>}></Route>
          <Route exact path="/Project" element={<Project/>}></Route>
          <Route exact path="/Contact" element={<Contact/>}></Route>
          <Route exact path="/Blog" element={<Blog/>}></Route>
          <Route exact path="/Protfilio-book" element={<MainBox/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
