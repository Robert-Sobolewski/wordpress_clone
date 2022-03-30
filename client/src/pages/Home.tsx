import React, { Fragment } from "react";
import ToggleTab from "../components/toggle-tab/ToggleTab";
import "./Home.scss";

const Home = () => {
  return (
    <Fragment>
      <div className="home">
        <ToggleTab />
        <h1>home page</h1>
      </div>
    </Fragment>
  );
};

export default Home;
