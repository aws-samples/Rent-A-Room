import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../../images/choosinghouse.svg";
import "../home/home.css"

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Rent A Room </h1>
        <p> Travel Like A Nomad</p>
        <Link to="/rooms">
          <button> Rent Now </button>
        </Link>
        <br></br>

        <br></br>
        <p className="createdBy">
          Created by Omar Faruk
        </p>
      </div>
    </div>
  )
}

export default Home