import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className="home-body">
        <h1>Welcome</h1>
        <p>HRnet is the app to manage employees records.</p>
        <p>Please, select your action</p>
        <div className="home-actions">
          <Link to="/employee-form" className="action-btn">
            Add employee
          </Link>
          <Link to="/employee-list" className="action-btn">
            View employees
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
