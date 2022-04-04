import { Avatar, IconButton, Stack } from "@mui/material";
import React, { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsCollection, BsPuzzle, BsPlus } from "react-icons/bs";
import "./MainMenu.scss";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { AiOutlineCloudServer } from "react-icons/ai";
import { OverlayTrigger, Popover } from "react-bootstrap";
const MainMenu = () => {
  const location = useLocation();
  return (
    <Fragment>
      <div className="main-menu">
        <Stack direction="column" spacing={2}>
          <OverlayTrigger
            trigger="hover"
            key="avatar"
            placement="right"
            overlay={
              <Popover id="avatar">
                <Popover.Body>
                  <h6 style={{ color: "#51bb7b" }}>LOGIN to WordpressClone</h6>
                </Popover.Body>
              </Popover>
            }
          >
            <IconButton>
              <NavLink id="loginBtn" to="/login">
                <Avatar sx={{ fontSize: "30" }} />
              </NavLink>
            </IconButton>
          </OverlayTrigger>

          <OverlayTrigger
            trigger="hover"
            key="avatar"
            placement="right"
            overlay={
              <Popover id="collection">
                <Popover.Body>
                  <h6>WordpressClone Sites</h6>
                </Popover.Body>
              </Popover>
            }
          >
            <NavLink to="/" activeClassName="active">
              <IconButton>
                <BsCollection size={30} />

                {/* <Avatar sx={{ fontSize: 40 }} /> */}
              </IconButton>
            </NavLink>
          </OverlayTrigger>

          <OverlayTrigger
            trigger="hover"
            key="avatar"
            placement="right"
            overlay={
              <Popover id="connect">
                <Popover.Body>
                  <h6>Connect</h6>
                </Popover.Body>
              </Popover>
            }
          >
            <NavLink to="/cloud" activeClassName="active">
              <IconButton>
                <AiOutlineCloudServer size={30} />

                {/* <Avatar sx={{ fontSize: 40 }} /> */}
              </IconButton>
            </NavLink>
          </OverlayTrigger>

          {/* Addons */}
          <OverlayTrigger
            trigger="hover"
            key="avatar"
            placement="right"
            overlay={
              <Popover id="addons">
                <Popover.Body>
                  <h6>Add-ons</h6>
                </Popover.Body>
              </Popover>
            }
          >
            <NavLink to="/addons" activeClassName="active">
              <IconButton>
                <BsPuzzle size={30} />

                {/* <Avatar sx={{ fontSize: 40 }} /> */}
              </IconButton>
            </NavLink>
          </OverlayTrigger>

          {/* help */}
          <OverlayTrigger
            trigger="hover"
            key="avatar"
            placement="right"
            overlay={
              <Popover id="help">
                <Popover.Body>
                  <h6>Support</h6>
                </Popover.Body>
              </Popover>
            }
          >
            <NavLink to="/help" activeClassName="active">
              <IconButton>
                <HelpOutlineOutlinedIcon sx={{ fontSize: 30 }} />

                {/* <Avatar sx={{ fontSize: 40 }} /> */}
              </IconButton>
            </NavLink>
          </OverlayTrigger>
        </Stack>

        {/* add new site */}
        <OverlayTrigger
          trigger="hover"
          key="avatar"
          placement="right"
          overlay={
            <Popover id="help">
              <Popover.Body>
                <h6>Add new Site</h6>
              </Popover.Body>
            </Popover>
          }
        >
          <NavLink to="/new" activeClassName="active">
            <IconButton id="new-site">
              <BsPlus size={30} />

              {/* <Avatar sx={{ fontSize: 40 }} /> */}
            </IconButton>
          </NavLink>
        </OverlayTrigger>
      </div>
    </Fragment>
  );
};

export default MainMenu;
