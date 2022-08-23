import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import TokenIcon from "@mui/icons-material/Token";
import GroupsIcon from "@mui/icons-material/Groups";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import PagesIcon from "@mui/icons-material/Pages";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InfoIcon from "@mui/icons-material/Info";

import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import "./AdminDrawer.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../../images/logo.png";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/system";
import { alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
// Nested List starts
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// Nested List ends

// All Icones used in this component
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import PercentIcon from "@mui/icons-material/Percent";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import { BsBarChartLine } from "react-icons/bs";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { BsBoxArrowRight } from "react-icons/bs";
import { AiOutlineCalculator } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import TranslateIcon from "@mui/icons-material/Translate";
import { BsMouse } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

import { logoutuser } from "./../../../redux/actions/authuser.js";

// select Box starts here
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    borderTop: "2px solid #0894FF",
    marginTop: theme.spacing(1),
    minWidth: 180,
    width: 250,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
        backgroundColor: "transparent",
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
//select Box Ends here

let activeStyle = {
  textDecoration: "none",
  color: "#b139d6",
};

let activeClassName = {
  textDecoration: "none",
  color: "#6E82A5",
};
const drawerWidth = 300;

function ResponsiveDrawer(props) {
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const navigate = useNavigate();

  const logoutUserNow = () => {
    cookies.remove("jwtToken");
    cookies.remove("myRole");
    cookies.remove("loginID");

    setTimeout(() => {
      navigate("/", { replace: true });
    });
    // this dispatch is for clear state
    dispatch(logoutuser());
  };

  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //Select Box starts
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //Select Box ends

  //Nested List for transaction
  const [openList, setOpenList] = React.useState(false);
  const handleClickList = () => {
    setOpenList(!openList);
  };
  //Nested List for transaction

  //Nested List for invested plans
  const [invested, setInvested] = React.useState(false);
  const handleClickinvested = () => {
    setInvested(!invested);
  };
  //Nested List for invested plans

  //Nested List for invest statement
  const [statement, setStatement] = React.useState(false);
  const handleClickStatement = () => {
    setStatement(!statement);
  };

  //Nested List for invest statement
  const [general, setGeneral] = React.useState(false);
  const handleClickGeneral = () => {
    setGeneral(!general);
  };

  const [banner, setBanner] = React.useState(false);
  const handleClickHomebanner = () => {
    setBanner(!banner);
  };

  //Nested List for invest statement

  //Nested List for invest statement
  const [users, setUsers] = React.useState(false);
  const handleClickUsers = () => {
    setUsers(!users);
  };
  //Nested List for invest statement

  //Nested List for invest statement
  const [content, setContent] = React.useState(false);
  const handleClickContent = () => {
    setContent(!content);
  };
  //Nested List for invest statement

  //Nested List for Application settings
  const [application, setApplication] = React.useState(false);
  const handleClickApplication = () => {
    setApplication(!application);
  };
  //Nested List for Application settings

  //Nested List for Application settings
  const [nftmarket, setNftmarket] = React.useState(false);
  const handleClickNFTMarket = () => {
    setNftmarket(!nftmarket);
  };

  const drawer = (
    <Box backgroundColor="#101924">
      <Container>
        <Box mt={5} mb={5}>
          <img src={logo} alt="logo" />
        </Box>
        <List>
          {/* sx={{ color: '#8094ae'}} */}
          <NavLink
            to="/adminDashboard"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem button>
              <DashboardOutlinedIcon />
              <ListItemText sx={{ paddingLeft: "14%" }}>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  Dashboard
                </span>
              </ListItemText>
            </ListItem>
          </NavLink>

          <NavLink
            to="/adminDashboard/referral"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem button>
              <PercentIcon style={{ fontSize: "1.5rem" }} />
              <ListItemText sx={{ paddingLeft: "14%" }}>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  Referral
                </span>
              </ListItemText>
              <Box
                sx={{
                  borderRadius: "3px",
                  backgroundColor: "#203247",
                  color: "#f5723f",
                  fontWeight: "700",
                  fontSize: "10px",
                  padding: "2%",
                  textAlign: "center",
                }}
              >
                21
              </Box>
            </ListItem>
          </NavLink>

          {/* Drop Down List Starts here */}
        </List>
        {/* DropDown List ends here  */}

        <span style={{ fontSize: "11px", fontWeight: "700", color: "#B7C2D0" }}>
          Courses
        </span>

        <List>
          <NavLink
            to="/adminDashboard/appsetting/list/course"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem button>
              <BsBarChartLine style={{ fontSize: "1.5rem" }} />
              <ListItemText style={{ paddingLeft: "14%" }}>
                <Box
                  sx={{
                    "&:hover": { color: "#f5723f" },
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#6E82A5",
                  }}
                >
                  All Courses
                </Box>
              </ListItemText>
            </ListItem>
          </NavLink>

          <NavLink
            to="/adminDashboard/appsetting/list/videos"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem button>
              <OndemandVideoIcon style={{ fontSize: "1.5rem" }} />
              <ListItemText style={{ paddingLeft: "14%" }}>
                <Box
                  sx={{
                    "&:hover": { color: "#f5723f" },
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#6E82A5",
                  }}
                >
                  Upload Video
                </Box>
              </ListItemText>
            </ListItem>
          </NavLink>
          {/* Invested Drop Down List Starts here */}
          <ListItemButton onClick={handleClickinvested}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <CurrencyExchangeOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5",
                }}
              >
                Invested Plans
              </Box>
            </ListItemText>
            {invested ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={invested} timeout="auto" unmountOnExit>
            <NavLink
              to="/adminDashboard/investment/history/active"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              <ListItemButton>
                <ListItemIcon />
                <Box
                  sx={{
                    "&:hover": { color: "#f5723f" },
                    fontSize: "12px",
                    color: "#6E82A5",
                  }}
                >
                  Actived Invest
                </Box>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/adminDashboard/investment/history/pending"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              <ListItemButton>
                <ListItemIcon />
                <Box
                  sx={{
                    "&:hover": { color: "#f5723f" },
                    fontSize: "12px",
                    color: "#6E82A5",
                  }}
                >
                  Pending Invest
                </Box>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/adminDashboard/investment/history/completed"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              <ListItemButton>
                <ListItemIcon />
                <Box
                  sx={{
                    "&:hover": { color: "#f5723f" },
                    fontSize: "12px",
                    color: "#6E82A5",
                  }}
                >
                  Completed Invest
                </Box>
              </ListItemButton>
            </NavLink>

            <NavLink
              to="/adminDashboard/investment/history"
              style={({ isActive }) =>
                isActive ? activeStyle : activeClassName
              }
            >
              <ListItemButton>
                <ListItemIcon />
                <Box
                  sx={{
                    "&:hover": { color: "#f5723f" },
                    fontSize: "12px",
                    color: "#6E82A5",
                  }}
                >
                  All Invested Plans
                </Box>
              </ListItemButton>
            </NavLink>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "12px",
                  color: "#6E82A5",
                }}
              >
                Manage Schemes
              </Box>
            </ListItemButton>
          </Collapse>
          {/* Invested DropDown List ends here  */}

          {/* Invest statement Drop Down List Starts here */}
          <ListItemButton onClick={handleClickStatement}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <AiOutlineCalculator style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5",
                }}
              >
                Invest Statement
              </Box>
            </ListItemText>
            {statement ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={statement} timeout="auto" unmountOnExit>
            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "12px",
                  color: "#6E82A5",
                }}
              >
                All Transactions
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "12px",
                  color: "#6E82A5",
                }}
              >
                Profit Settlement
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "12px",
                  color: "#6E82A5",
                }}
              >
                Transferred History
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "12px",
                  color: "#6E82A5",
                }}
              >
                Profit / Interest Logs
              </Box>
            </ListItemButton>
          </Collapse>

          {/* Invest statement DropDown List ends here  */}
        </List>

        {/* <span style={{ fontSize: "11px", fontWeight: "700", color: "#B7C2D0" }}>
          User Managment
        </span>

        <List>
       
          <ListItemButton onClick={handleClickUsers}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <FiUsers style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5",
                }}
              >
                Manage Users
              </Box>
            </ListItemText>
            {users ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={users} timeout="auto" unmountOnExit>
            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "12px",
                  color: "#6E82A5",
                }}
              >
                Active
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "12px",
                  color: "#6E82A5",
                }}
              >
                Inactive <span>(74)</span>
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "12px",
                  color: "#6E82A5",
                }}
              >
                Suspended <span>(20)</span>
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "12px",
                  color: "#6E82A5",
                }}
              >
                All Users
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "12px",
                  color: "#6E82A5",
                }}
              >
                Administrator <span>(2)</span>
              </Box>
            </ListItemButton>
          </Collapse>
       

          <ListItem button sx={{ "&:hover": {} }}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <BsCheck2Circle style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5",
                }}
              >
                Verification Center
              </Box>
            </ListItemText>
          </ListItem>
        </List> */}

        <span style={{ fontSize: "11px", fontWeight: "700", color: "#B7C2D0" }}>
          Managment
        </span>

        <List>
      
          <ListItemButton onClick={handleClickContent}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <FaRegCopy style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5",
                }}
              >
                Manage Content
              </Box>
            </ListItemText>
            {content ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={content} timeout="auto" unmountOnExit>
            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "12px",
                  color: "#6E82A5",
                }}
              >
                Manage Pages
              </Box>
            </ListItemButton>

            <ListItemButton sx={{}}>
              <ListItemIcon />
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "12px",
                  color: "#6E82A5",
                }}
              >
                Email Tamplates
              </Box>
            </ListItemButton>
          </Collapse>
        

     
          <ListItemButton onClick={handleClickApplication}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5",
                }}
              >
                App Settings
              </Box>
            </ListItemText>
            {application ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={application} timeout="auto" unmountOnExit>
          

            <ListItemButton
              onClick={handleClickGeneral}
              style={{ width: "85%", margin: "0px auto" }}
            >
              <ListItemIcon sx={{ color: "#6E82A5" }}>
                <ConnectWithoutContactIcon style={{ fontSize: "1.5rem" }} />
              </ListItemIcon>
              <ListItemText>
                <Box
                  sx={{
                    "&:hover": { color: "#f5723f" },
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#6E82A5",
                  }}
                >
                  General
                </Box>
              </ListItemText>
              {general ? (
                <ExpandLess style={{ color: "white" }} />
              ) : (
                <ExpandMore style={{ color: "white" }} />
              )}
            </ListItemButton>
            <Collapse in={general} timeout="auto" unmountOnExit>
              <NavLink
                to="/adminDashboard/appsetting/list/general"
                style={({ isActive }) =>
                  isActive ? activeStyle : activeClassName
                }
              >
                <ListItemButton sx={{}}>
                  <ListItemIcon />
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "12px",
                      color: "#6E82A5",
                    }}
                  >
                    Website Settings
                  </Box>
                </ListItemButton>
              </NavLink>

              <NavLink
                to="/adminDashboard/appsetting/list/social"
                style={({ isActive }) =>
                  isActive ? activeStyle : activeClassName
                }
              >
                <ListItemButton sx={{}}>
                  <ListItemIcon />
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "12px",
                      color: "#6E82A5",
                    }}
                  >
                    Social Links
                  </Box>
                </ListItemButton>
              </NavLink>
            </Collapse>

        
            <ListItemButton
              onClick={handleClickNFTMarket}
              style={{ width: "85%", margin: "0px auto" }}
            >
              <ListItemIcon sx={{ color: "#6E82A5" }}>
                <StorefrontIcon style={{ fontSize: "1.5rem" }} />
              </ListItemIcon>
              <ListItemText>
                <Box
                  sx={{
                    "&:hover": { color: "#f5723f" },
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#6E82A5",
                  }}
                >
                  NFT Market
                </Box>
              </ListItemText>
              {nftmarket ? (
                <ExpandLess style={{ color: "white" }} />
              ) : (
                <ExpandMore style={{ color: "white" }} />
              )}
            </ListItemButton>
            <Collapse in={nftmarket} timeout="auto" unmountOnExit>
              <NavLink
                to="/adminDashboard/appsetting/list/nft-promoted"
                style={({ isActive }) =>
                  isActive ? activeStyle : activeClassName
                }
              >
                <ListItemButton sx={{}}>
                  <ListItemIcon />
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "12px",
                      color: "#6E82A5",
                    }}
                  >
                    NFT-Promoted
                  </Box>
                </ListItemButton>
              </NavLink>

              <NavLink
                to="/adminDashboard/appsetting/list/nft-popular"
                style={({ isActive }) =>
                  isActive ? activeStyle : activeClassName
                }
              >
                <ListItemButton sx={{}}>
                  <ListItemIcon />
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "12px",
                      color: "#6E82A5",
                    }}
                  >
                    NFT-Popular
                  </Box>
                </ListItemButton>
              </NavLink>

              <NavLink
                to="/adminDashboard/appsetting/list/nft-recent"
                style={({ isActive }) =>
                  isActive ? activeStyle : activeClassName
                }
              >
                <ListItemButton sx={{}}>
                  <ListItemIcon />
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "12px",
                      color: "#6E82A5",
                    }}
                  >
                    NFT-Recent
                  </Box>
                </ListItemButton>
              </NavLink>
            </Collapse>

           <ListItemButton
            style={{ width: "85%", margin: "0px auto" }}
            >
              <ListItemIcon sx={{ color: "#6E82A5" }}>
                <HomeWorkIcon style={{ fontSize: "1.5rem" }} />
              </ListItemIcon>
              <ListItemText>
                <NavLink
                  to="/adminDashboard/appsetting/list/homebanner"
                  style={({ isActive }) =>
                    isActive ? activeStyle : activeClassName
                  }
                >
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#6E82A5",
                    }}
                  >
                    Home Banner
                  </Box>
                </NavLink>
              </ListItemText>
            </ListItemButton>

          <ListItemButton
              // onClick={handleClickHomebanner}
              style={{ width: "85%", margin: "0px auto" }}
            >
              <ListItemIcon sx={{ color: "#6E82A5" }}>
                <ViewCarouselIcon style={{ fontSize: "1.5rem" }} />
              </ListItemIcon>
              <ListItemText>
                <NavLink
                  to="/adminDashboard/appsetting/list/nft-carousal"
                  style={({ isActive }) =>
                    isActive ? activeStyle : activeClassName
                  }
                >
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#6E82A5",
                    }}
                  >
                    NFT Carousal
                  </Box>
                </NavLink>
              </ListItemText>
            </ListItemButton>

           <ListItemButton
              // onClick={handleClickHomebanner}
              style={{ width: "85%", margin: "0px auto" }}
            >
              <ListItemIcon sx={{ color: "#6E82A5" }}>
                <PlaylistAddCheckIcon style={{ fontSize: "1.5rem" }} />
              </ListItemIcon>
              <ListItemText>
                <NavLink
                  to="/adminDashboard/appsetting/list/home-services"
                  style={({ isActive }) =>
                    isActive ? activeStyle : activeClassName
                  }
                >
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#6E82A5",
                    }}
                  >
                    Home Services
                  </Box>
                </NavLink>
              </ListItemText>
            </ListItemButton>

            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            <ListItemButton
              // onClick={handleClickHomebanner}
              style={{ width: "85%", margin: "0px auto" }}
            >
              <ListItemIcon sx={{ color: "#6E82A5" }}>
                <InfoIcon style={{ fontSize: "1.5rem" }} />
              </ListItemIcon>
              <ListItemText>
                <NavLink
                  to="/adminDashboard/appsetting/list/aboutUs"
                  style={({ isActive }) =>
                    isActive ? activeStyle : activeClassName
                  }
                >
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#6E82A5",
                    }}
                  >
                    About Us
                  </Box>
                </NavLink>
              </ListItemText>
            </ListItemButton>

            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            <ListItemButton
              // onClick={handleClickHomebanner}
              style={{ width: "85%", margin: "0px auto" }}
            >
              <ListItemIcon sx={{ color: "#6E82A5" }}>
                <DocumentScannerIcon style={{ fontSize: "1.5rem" }} />
              </ListItemIcon>
              <ListItemText>
                <NavLink
                  to="/adminDashboard/appsetting/list/home-docs"
                  style={({ isActive }) =>
                    isActive ? activeStyle : activeClassName
                  }
                >
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#6E82A5",
                    }}
                  >
                    Read Documents
                  </Box>
                </NavLink>
              </ListItemText>
            </ListItemButton>

            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            <ListItemButton
              // onClick={handleClickHomebanner}
              style={{ width: "85%", margin: "0px auto" }}
            >
              <ListItemIcon sx={{ color: "#6E82A5" }}>
                <GroupsIcon style={{ fontSize: "1.5rem" }} />
              </ListItemIcon>
              <ListItemText>
                <NavLink
                  to="/adminDashboard/appsetting/list/devteam"
                  style={({ isActive }) =>
                    isActive ? activeStyle : activeClassName
                  }
                >
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#6E82A5",
                    }}
                  >
                    Dev Team
                  </Box>
                </NavLink>
              </ListItemText>
            </ListItemButton>

            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* <ListItemButton
              // onClick={handleClickHomebanner}
              style={{ width: "85%", margin: "0px auto" }}
            >
              <ListItemIcon sx={{ color: "#6E82A5" }}>
                <GroupWorkIcon style={{ fontSize: "1.5rem" }} />
              </ListItemIcon>
              <ListItemText>
                <NavLink
                  to="/adminDashboard/appsetting/list/aboutUs"
                  style={({ isActive }) =>
                    isActive ? activeStyle : activeClassName
                  }
                >
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#6E82A5",
                    }}
                  >
                    Partnerships
                  </Box>
                </NavLink>
              </ListItemText>
            </ListItemButton> */}

            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            <ListItemButton
              // onClick={handleClickHomebanner}
              style={{ width: "85%", margin: "0px auto" }}
            >
              <ListItemIcon sx={{ color: "#6E82A5" }}>
                <PagesIcon style={{ fontSize: "1.5rem" }} />
              </ListItemIcon>
              <ListItemText>
                <NavLink
                  to="/adminDashboard/appsetting/list/blogs"
                  style={({ isActive }) =>
                    isActive ? activeStyle : activeClassName
                  }
                >
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#6E82A5",
                    }}
                  >
                    Blog
                  </Box>
                </NavLink>
              </ListItemText>
            </ListItemButton>

            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            <ListItemButton
              // onClick={handleClickHomebanner}
              style={{ width: "85%", margin: "0px auto" }}
            >
              <ListItemIcon sx={{ color: "#6E82A5" }}>
                <AddRoadIcon style={{ fontSize: "1.5rem" }} />
              </ListItemIcon>
              <ListItemText>
                <NavLink
                  to="/adminDashboard/appsetting/list/roadmap"
                  style={({ isActive }) =>
                    isActive ? activeStyle : activeClassName
                  }
                >
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#6E82A5",
                    }}
                  >
                    Road Map
                  </Box>
                </NavLink>
              </ListItemText>
            </ListItemButton>

            {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
            <ListItemButton
              // onClick={handleClickHomebanner}
              style={{ width: "85%", margin: "0px auto" }}
            >
              <ListItemIcon sx={{ color: "#6E82A5" }}>
                <TokenIcon style={{ fontSize: "1.5rem" }} />
              </ListItemIcon>
              <ListItemText>
                <NavLink
                  to="/adminDashboard/appsetting/list/tokenomics"
                  style={({ isActive }) =>
                    isActive ? activeStyle : activeClassName
                  }
                >
                  <Box
                    sx={{
                      "&:hover": { color: "#f5723f" },
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#6E82A5",
                    }}
                  >
                    Tokenomics
                  </Box>
                </NavLink>
              </ListItemText>
            </ListItemButton>

            {/* ////////////////////////////////////////////////////// */}
          </Collapse>
        

          <ListItem button sx={{ "&:hover": {} }}>
            <ListItemIcon sx={{ color: "#6E82A5" }}>
              <TranslateIcon style={{ fontSize: "1.5rem" }} />
            </ListItemIcon>
            <ListItemText>
              <Box
                sx={{
                  "&:hover": { color: "#f5723f" },
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#6E82A5",
                }}
              >
                Manage Language
              </Box>
            </ListItemText>
          </ListItem>
        </List>
        <Toolbar />
      </Container>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const innercollaps = {
    width: "85%",
    margin: "0px auto",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#FFFFFF",
          borderBottom: 1,
          borderColor: "divider",
          boxShadow: "none",
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          // width="100%"
          // sx={{
          //   justifyContent: {
          //     xs: "space-between"

          //     // sm: 'flex-end'
          //   }
          // }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // maxWidth: "100px"
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            color="black"
            sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
          >
            <Box sx={{ color: "#f5723f", fontSize: "1.5rem" }}>
              <BsMouse style={{ fontSize: "1.5rem" }} />
            </Box>
            <Box>
              <span style={{ fontSize: "13px" }}>Fun Fact!</span>
              <span
                style={{
                  fontSize: "13px",
                  color: "#6E82A5",
                  marginLeft: "4px",
                }}
              >
                You have 157 actived invested plan
              </span>
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <Box
              color="black"
              mr={3}
              sx={{ cursor: "pointer", fontSize: "1.3rem" }}
            >
              <BsBoxArrowUpRight />
            </Box>
            <Box>
              <Avatar sx={{ backgroundColor: "#f5723f" }}>
                <PersonOutlinedIcon />
              </Avatar>
            </Box>
            <Box textAlign="center">
              <Typography color="#037DFF" fontSize="13px">
                Admin
              </Typography>

              <div>
                <Button
                  style={{
                    background: "transparent",
                    color: "black",
                    fontSize: "11px",
                    fontWeight: "700",
                  }}
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Administrator
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <Box backgroundColor="#F5F6FA">
                    <MenuItem onClick={handleClose}>
                      <Avatar sx={{ backgroundColor: "#20C997" }}>AD</Avatar>
                      <Box ml={2} display="flex" flexDirection="column">
                        <Box fontSize="13px" fontWeight="800">
                          Administrator
                        </Box>
                        <Box fontSize="12px" fontWeight="500" color="#8094ae">
                          info@softnio.coms
                        </Box>
                      </Box>
                    </MenuItem>
                  </Box>

                  <Divider sx={{ my: 0.5 }} />
                  <Box color="#75849D">
                    <MenuItem onClick={handleClose} disableRipple>
                      <ListItem sx={{ "&:hover": { color: "#f5723f" } }}>
                        <ListItemIcon>
                          <PermIdentityOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography fontSize="13px" fontWeight="700">
                            View Profile{" "}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </MenuItem>

                    <MenuItem onClick={handleClose} disableRipple>
                      <ListItem sx={{ "&:hover": { color: "#f5723f" } }}>
                        <ListItemIcon>
                          <SettingsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography fontSize="13px" fontWeight="700">
                            Account Setting
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </MenuItem>

                    <MenuItem onClick={handleClose} disableRipple>
                      <ListItem sx={{ "&:hover": { color: "#f5723f" } }}>
                        <ListItemIcon>
                          <FiActivity />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography fontSize="13px" fontWeight="700">
                            Login Activity
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </MenuItem>
                  </Box>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <List>
                      <ListItem
                        sx={{
                          "&:hover": { color: "#f5723f" },
                          color: "#75849D",
                        }}
                      >
                        <ListItemIcon>
                          <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography
                            fontSize="13px"
                            fontWeight="700"
                            onClick={logoutUserNow}
                          >
                            Sign out
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </List>
                  </MenuItem>
                </StyledMenu>
              </div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "block", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: `calc(100% - ${drawerWidth}px)`, md: "100%" },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
ResponsiveDrawer.propTypes = { window: PropTypes.func };
export default ResponsiveDrawer;
