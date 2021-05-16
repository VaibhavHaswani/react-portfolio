
import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Vaibhav</p>
          <p>ML Engineer</p>
        </h1>
        <Link to="about">
          <button>Know Me</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/pic2.jpg`}
          alt="picture"
        />
      </div>
    </div>
  );
};


export default Home;
