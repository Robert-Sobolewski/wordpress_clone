import { IconButton } from "@mui/material";
import "./ToggleTab.scss";
import React, { Fragment, useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { is } from "immer/dist/internal";

const ToggleTab = () => {
  const [isExpand, setIsExpand] = useState(true);
  const toggleClick = () => {
    setIsExpand(!isExpand);
  };
  return (
    <Fragment>
      <div
        className={`toggle-tab ${isExpand ? "expand" : "eng"}`}
        style={{ transition: "all 1s normal" }}
      >
        <IconButton
          onClick={toggleClick}
          style={{
            position: "absolute",
            top: "0.5em",
            right: `${isExpand ? "1em" : "0px"}`,
          }}
        >
          {isExpand ? (
            <KeyboardDoubleArrowLeftIcon sx={{ fontSize: "30" }} />
          ) : (
            <KeyboardDoubleArrowRightIcon sx={{ fontSize: "30" }} />
          )}
        </IconButton>
        <div
          className="wrapper"
          style={{ display: `${isExpand ? "block" : "none"}` }}
        >
          <h3 style={{ margin: "0.5em" }}>Wp Sites</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default ToggleTab;
