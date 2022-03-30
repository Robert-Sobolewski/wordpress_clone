import React, { Fragment } from "react";
import ToggleTab from "../components/toggle-tab/ToggleTab";

const Home = () => {
  return (
    <Fragment>
      <div className="home">
        <ToggleTab />
        <h1 style={{ margin: "0.5em" }}>home page</h1>
      </div>
    </Fragment>
  );
};

export default Home;
