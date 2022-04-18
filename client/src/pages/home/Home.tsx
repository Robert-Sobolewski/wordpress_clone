import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ToggleTab from "../../components/toggle-tab/ToggleTab";
import { selectUser } from "../../redux/userSlicer";
import "./Home.scss";

const Home = () => {
  const user = useSelector(selectUser);
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
