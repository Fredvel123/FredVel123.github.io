import React, { Fragment } from "react";
import Credits from "./component/Credits";
import DogApi from "./component/DogApi";
import Footer from "./component/Footer";
import Header from "./component/Header";
import "./home.css";

function Home() {
  return (
    <Fragment>
      <Header />
      <DogApi />
      <Credits />
      <Footer />
    </Fragment>
  );

}
export default Home;
