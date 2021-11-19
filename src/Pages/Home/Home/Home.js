import React from "react";
import Footer from "../../Shared/Navbar/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Apartments from "../Apartments/Apartments";
import Header from "../Header/Header";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header />
      <Apartments></Apartments>
      <Review />
      <Footer></Footer>
    </div>
  );
};

export default Home;
