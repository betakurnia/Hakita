import React, { Fragment, useEffect } from "react";

// components
import Header from "./Header";
import CompanyMission from "./CompanyMission";
import Services from "./Services";
import Information from "./Information";
import Blog from "./Blog";
import Question from "./Question";

function Home() {
  useEffect(() => {
    alert("e");
    document.title = "Hakita | Urusan legal jadi lebih gampang";
  });

  return (
    <Fragment>
      <Header />
      <CompanyMission />
      <Services />
      <Information />
      <Blog />
      <Question />
    </Fragment>
  );
}

export default Home;
