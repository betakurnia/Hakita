import React from "react";
import "./App.css";

// npm
import { BrowserRouter as Router, Route } from "react-router-dom";

// component main
import MainPage from "./components/Main/MainPage";
import BlogPage from "./components/Main/BlogPage";
import BlogPageTwos from "./components/Main/BlogPageTwos";

// component layout
import SocialMedia from "./components/Layout/SocialMedia";
import Footer from "./components/Layout/Footer";

// component page
import SignIn from "./components/Pages/SignIn/SignIn";
import SignUp from "./components/Pages/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Route path="/" component={SocialMedia} />
      <Route path="/" exact component={MainPage} />
      <Route path="/blog" exact component={BlogPage} />
      <Route path="/blog/page/2/" exact component={BlogPageTwos} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signin" exact component={Footer} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/signup" exact component={Footer} />
    </Router>
  );
}

export default App;
