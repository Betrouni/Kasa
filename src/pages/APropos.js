import React from "react";
import Header from "../components/Header";
import Banner from "../components/APropos/Banner";
import Accordion from '../components/APropos/Accordion'
import Footer from "../components/Footer";

export default function APropos() {
  return (
    <div>
      <Header />
      <Banner />
      <Accordion/>
      <Accordion/>
      <Accordion/>
      <Accordion/>
      <Footer />
    </div>
  );
}
