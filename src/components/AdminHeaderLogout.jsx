import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";


import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { AppContext } from "../utils";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Paper } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

 import { logoutuser } from "../redux/actions/authuser.js";
 import { useNavigate } from "react-router-dom";
 import Cookies from "universal-cookie";

 import API from "../redux/url.js";

 import { getgnrldata } from "../redux/actions/adminDash_action.js";
//----------dropdown code -----------
const StyledMenu = styled((props) => (
  <Menu
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
    minWidth: 160,
    color: "white",
    backgroundImage: "linear-gradient(to bottom right, #FF6503, #FF8105)",

    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
  },
}));
// -----End o code of option dropdown--------

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    backgroundImage: "linear-gradient(to bottom right, #FF6503, #FF8105)",
    justifyContent: "center",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },

  listText: {
    textAlign: "center",
    textDecoration: "none",
    cursor: "pointer",
    color: "#ffffff",
    fontSize: "15px",
    fontFamily: "Helvetice-Bold",
  },
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.5rem", color: "white" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function AdminHeaderLogout() {
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    let obj = {
      name: "qasim",
      email: "fcdfr",
    };
    dispatch(getgnrldata(obj));
  }, []);

  const logoutUser = () => {
    // dispatch(logoutuser());
    //  cookies.remove("jwtToken", { path: "/", domain: "gaddollcat.herokuapp.com" });
    cookies.remove("jwtToken");
    cookies.remove("myRole");

    setTimeout(() => {
      navigate("/", { replace: true });
    });
    // this dispatch is for clear state
    dispatch(logoutuser());
  };

  const { account, connect, disconnect } = useContext(AppContext);
  // ------code for options dropdowns ----------
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Second option
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open2 = Boolean(anchorE2);
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  // third option
  const [anchorE3, setAnchorE3] = React.useState(null);
  const open3 = Boolean(anchorE3);
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorE3(null);
  };
  // fourth option
  const [anchorE4, setAnchorE4] = React.useState(null);
  const open4 = Boolean(anchorE4);
  const handleClick4 = (event) => {
    setAnchorE4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorE4(null);
  };
  // ---------End of dropdown code-------
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const QuickLinks = [
    "NFT Marketplace",
    "Tokenomics",
    "Public Presale",
    "Dev Team",
    "Blog",
    "About",
    "Private Presale",
    "Listings",
    "Road Map",
  ];
  const communityLinks = [
    "https://twitter.com/RDCNFT",
    "https://t.me/RDCNFT",
    "https://www.facebook.com/groups/rdcnft/",
    "https://www.instagram.com/rdcnftofficial/",
    "https://www.youtube.com/channel/UCykM-9k39J8ddOMdiaxX0zg",
    "https://bitcointalk.org/index.php?topic=5394849",
  ];
  const Documents = ["FAQ", "Business", "Logo"];
  const community = [
    "Twitter",
    "Telegram",
    "Facebook",
    "Instagram",
    "YouTube",
    "Bitcointalk",
  ];
  const utility = [
    "Live Cat Marketplace",
    "Cat Lovers Community",
    "Stake & Earn",
  ];
  const [expanded, setExpanded] = React.useState("false");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const matches = useMediaQuery("(max-width:960px)");
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  // *********** Drawer code starts here *************
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box mt={-20} display="flex" justifyContent="center">
        <HashLink smooth to="/home#home" style={{ textDecoration: "none" }}>
          <img width="100px" src="/images/logo.png" alt="" />
        </HashLink>
      </Box>

      <HashLink
        smooth
        to="/userDashboard"
        style={{ textDecoration: "none", color: "white" }}
      >
        <Box mt={3} pl={3} onClick={toggleDrawer(anchor, false)}>
          AdminDashBoard
        </Box>
      </HashLink>

      <HashLink
        smooth
        to="/home#home"
        style={{ textDecoration: "none", color: "white" }}
      >
        <Box mt={3} pl={3} onClick={toggleDrawer(anchor, false)}>
          Home
        </Box>
      </HashLink>

      <Accordion
        expanded={expanded === `panel${1}`}
        onChange={handleChange(`panel${1}`)}
        sx={{
          fontFamily: "Helvetica-Bold",
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "white",
          marginTop: "10px",
        }}
      >
        <AccordionSummary
          aria-controls={`panel${1}d-content`}
          id={`panel${1}d-header`}
        >
          <Typography>QuickLinks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {QuickLinks.map((value) => {
            return (
              <HashLink
                to={`/home#${value}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Box
                  onClick={toggleDrawer(anchor, false)}
                  sx={{ fontFamily: "Helvetice-Bold" }}
                >
                  {value}
                </Box>
              </HashLink>
            );
          })}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === `panel${2}`}
        onChange={handleChange(`panel${2}`)}
        sx={{
          fontFamily: "Helvetica-Bold",
          background: "transparent",
          color: "white",
          marginTop: "10px",
        }}
      >
        <AccordionSummary
          aria-controls={`panel${2}d-content`}
          id={`panel${1}d-header`}
        >
          <Typography>Utilities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <HashLink
            to="/home#Token Info"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Box
              onClick={toggleDrawer(anchor, false)}
              sx={{ fontFamily: "Helvetice-Bold" }}
            >
              RDC Token
            </Box>
          </HashLink>
          <HashLink
            to="/home#NFT Marketplace"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Box
              onClick={toggleDrawer(anchor, false)}
              sx={{ fontFamily: "Helvetice-Bold" }}
            >
              NFT Marketplace
            </Box>
          </HashLink>
          {utility.map((value) => {
            return (
              <HashLink
                to="/home#rogdollcatnft"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Box
                  onClick={toggleDrawer(anchor, false)}
                  sx={{ fontFamily: "Helvetice-Bold" }}
                >
                  {value}
                </Box>
              </HashLink>
            );
          })}
          <HashLink
            to="/home#Blog"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Box
              onClick={toggleDrawer(anchor, false)}
              sx={{ fontFamily: "Helvetice-Bold" }}
            >
              Blog Post
            </Box>
          </HashLink>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === `panel${3}`}
        onChange={handleChange(`panel${3}`)}
        sx={{
          fontFamily: "Helvetica-Bold",
          background: "transparent",
          color: "white",
          marginTop: "10px",
        }}
      >
        <AccordionSummary
          aria-controls={`panel${3}d-content`}
          id={`panel${1}d-header`}
        >
          <Typography>Documents</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <HashLink
            smooth
            to="/home#Documents"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Box
              onClick={toggleDrawer(anchor, false)}
              sx={{ fontFamily: "Helvetice-Bold" }}
            >
              Audit
            </Box>
          </HashLink>

          <a
            href="https://www.flipsnack.com/E77D96AA9F7/ragdoll-cat-nft-rdc-roadmap.html"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Box
              onClick={toggleDrawer(anchor, false)}
              sx={{ fontFamily: "Helvetice-Bold" }}
            >
              RoadMap
            </Box>
          </a>

          <a
            href="https://www.flipsnack.com/E77D96AA9F7/rdc-whitepaper.html"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Box
              onClick={toggleDrawer(anchor, false)}
              sx={{ fontFamily: "Helvetice-Bold" }}
            >
              Whitepaper
            </Box>
          </a>

          {Documents.map((value) => {
            return (
              <HashLink
                to={`/${value.toLowerCase()}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Box
                  onClick={toggleDrawer(anchor, false)}
                  sx={{ fontFamily: "Helvetice-Bold" }}
                >
                  {value}
                </Box>
              </HashLink>
            );
          })}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === `panel${4}`}
        onChange={handleChange(`panel${4}`)}
        sx={{
          fontFamily: "Helvetica-Bold",
          background: "transparent",
          color: "white",
          marginTop: "10px",
        }}
      >
        <AccordionSummary
          aria-controls={`panel${4}d-content`}
          id={`panel${1}d-header`}
        >
          <Typography>Community</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {community.map((value, i) => {
            return (
              <a
                href={communityLinks[i]}
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Box
                  onClick={toggleDrawer(anchor, false)}
                  sx={{ fontFamily: "Helvetice-Bold" }}
                >
                  {value}
                </Box>
              </a>
            );
          })}
        </AccordionDetails>
      </Accordion>

      <Box mb={1} display="flex" justifyContent="center">
        {account ? (
          <Box
            width="90%"
            height="42px"
            bgcolor="#098CDC"
            borderRadius="8px"
            sx={{ cursor: "pointer" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#ffffff"
            fontWeight="500"
            fontSize="16px"
            onClick={() => disconnect()}
            style={{ zIndex: 1 }}
          >
            {account.slice(0, 4) + "..." + account.slice(-4)}
          </Box>
        ) : (
          <Box
            sx={{
              width: "fit-content",
              border: "3px solid #FF8504",
              borderRadius: "30px",
              margin: "auto",
              boxShadow: 4,
            }}
          >
            <Box
              zIndex={1}
              sx={{
                cursor: "pointer",
              }}
              bgcolor="transparent"
              width="180px"
              height="42px"
              fontFamily="Helvetice-Bold"
              border="1px solid white"
              borderRadius="30px"
              fontSize="14px"
              color="#ffffff"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => connect()}
            >
              CONNECT WALLET
              <ArrowForwardIosIcon fontSize="small" />
            </Box>
          </Box>
        )}
      </Box>
    </div>
  );
  // *********** Drawer code end *************

  const GetgnrlsiteData = useSelector(
    (state) => state.adminDashboard_red.GetgnrlsiteData
  );
  console.log("GetgnrlData Responce is", GetgnrlsiteData);

  // ******** Header code starts here *********
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        style={{
          backgroundImage: "linear-gradient(to right, #FF6503, #FF8606)",
          zIndex: "100",
        }}
        height="92px"
        width="100%"
      >
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <HashLink
                smooth
                to="/home#home"
                style={{ textDecoration: "none" }}
              >
                {GetgnrlsiteData ? (
                  <div>
                    {GetgnrlsiteData.map((item, index) => {
                      return (
                        <Box>
                          <img
                            src={API + "/uploads/" + item.image}
                            width="50%"
                            height="50%"
                          />
                        </Box>
                      );
                    })}
                  </div>
                ) : (
                  <div>Loading...</div>
                )}
              </HashLink>
            </Box>
            <Box
              display="flex"
              justifyContent={matches1 ? "end" : "space-between"}
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Hidden mdDown>
                  <HashLink to="/home#home" style={{ textDecoration: "none" }}>
                    <Box
                      pr={2}
                      fontSize="15px"
                      fontFamily="Helvetice-Bold"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#ffffff",
                        textTransform: "capitalize",
                      }}
                    >
                      home
                    </Box>
                  </HashLink>

                  <Box pr={2} fontFamily="Helvetice-Bold" zIndex="1">
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      sx={{
                        color: "white",
                        textTransform: "capitalize",
                        fontFamily: "Helvetice-Bold",
                        fontSize: "15px",
                      }}
                      onClick={handleClick}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      QuickLinks
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
                      {QuickLinks.map((value) => {
                        return (
                          <HashLink
                            smooth
                            to={`/home#${value}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <MenuItem onClick={handleClose} disableRipple>
                              {value}
                            </MenuItem>
                          </HashLink>
                        );
                      })}
                    </StyledMenu>
                  </Box>

                  <Box pr={2} fontFamily="Helvetice-Bold" zIndex="1">
                    <Button
                      id="demo-customized-button"
                      aria-controls={open2 ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open2 ? "true" : undefined}
                      sx={{
                        color: "white",
                        textTransform: "capitalize",
                        fontFamily: "Helvetice-Bold",
                        fontSize: "15px",
                      }}
                      onClick={handleClick2}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      utilities
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorE2}
                      open={open2}
                      onClose={handleClose2}
                    >
                      <HashLink
                        smooth
                        to="/home#Token Info"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose2} disableRipple>
                          RDC Token
                        </MenuItem>
                      </HashLink>
                      <HashLink
                        smooth
                        to="/home#NFT Marketplace"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose2} disableRipple>
                          NFT Marketplace
                        </MenuItem>
                      </HashLink>
                      {utility.map((value) => {
                        return (
                          <HashLink
                            smooth
                            to="/home#rogdollcatnft"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <MenuItem onClick={handleClose2} disableRipple>
                              {value}
                            </MenuItem>
                          </HashLink>
                        );
                      })}

                      <HashLink
                        smooth
                        to="/home#Blog"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose2} disableRipple>
                          Blog Post
                        </MenuItem>
                      </HashLink>
                    </StyledMenu>
                  </Box>

                  <Box pr={2} fontFamily="Helvetice-Bold" zIndex="1">
                    <Button
                      id="demo-customized-button"
                      aria-controls={open3 ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open3 ? "true" : undefined}
                      sx={{
                        color: "white",
                        textTransform: "capitalize",
                        fontFamily: "Helvetice-Bold",
                        fontSize: "15px",
                      }}
                      onClick={handleClick3}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      documents
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorE3}
                      open={open3}
                      onClose={handleClose3}
                    >
                      <HashLink
                        smooth
                        to="/home#Documents"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose3} disableRipple>
                          Audit
                        </MenuItem>
                      </HashLink>

                      <a
                        href="https://www.flipsnack.com/E77D96AA9F7/ragdoll-cat-nft-rdc-roadmap.html"
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose3} disableRipple>
                          Roadmap
                        </MenuItem>
                      </a>

                      <a
                        href="https://www.flipsnack.com/E77D96AA9F7/rdc-whitepaper.html"
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <MenuItem onClick={handleClose3} disableRipple>
                          Whitepaper
                        </MenuItem>
                      </a>

                      {Documents.map((value) => {
                        return (
                          <HashLink
                            smooth
                            to={`/${value.toLowerCase()}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <MenuItem onClick={handleClose3} disableRipple>
                              {value}
                            </MenuItem>
                          </HashLink>
                        );
                      })}
                    </StyledMenu>
                  </Box>

                  <Box pr={2} fontFamily="Helvetice-Bold" zIndex="1">
                    <Button
                      id="demo-customized-button"
                      aria-controls={open4 ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open4 ? "true" : undefined}
                      sx={{
                        color: "white",
                        textTransform: "capitalize",
                        fontFamily: "Helvetice-Bold",
                        fontSize: "15px",
                      }}
                      onClick={handleClick4}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      community
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorE4}
                      open={open4}
                      onClose={handleClose4}
                    >
                      {community.map((value, i) => {
                        return (
                          <a
                            href={communityLinks[i]}
                            target="_blank"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <MenuItem onClick={handleClose4} disableRipple>
                              {value}
                            </MenuItem>
                          </a>
                        );
                      })}
                    </StyledMenu>
                  </Box>

                  {account ? (
                    <Box
                      width="130px"
                      height="42px"
                      bgcolor="#098CDC"
                      borderRadius="8px"
                      sx={{ cursor: "pointer" }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      color="#ffffff"
                      fontWeight="500"
                      fontSize="16px"
                      onClick={() => disconnect()}
                      style={{ zIndex: 1 }}
                    >
                      {account.slice(0, 4) + "..." + account.slice(-4)}
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        width: "fit-content",
                        border: "3px solid #FF8504",
                        borderRadius: "30px",
                        margin: "auto",
                        boxShadow: 4,
                      }}
                    >
                      <Box
                        zIndex={1}
                        sx={{
                          cursor: "pointer",
                          textTransform: "uppercase",
                        }}
                        bgcolor="transparent"
                        width="180px"
                        height="42px"
                        fontFamily="Helvetice-Bold"
                        border="1px solid white"
                        borderRadius="30px"
                        fontSize="14px"
                        color="#ffffff"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        onClick={() => connect()}
                      >
                        connect wallet
                        <ArrowForwardIosIcon fontSize="small" />
                      </Box>
                    </Box>
                  )}
                </Hidden>

                <Box
                  pl={2}
                  fontSize="15px"
                  fontFamily="Helvetice-Bold"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#ffffff",
                    textTransform: "capitalize",
                  }}
                  onClick={logoutUser}
                >
                  adminLogout
                </Box>
              </Box>

              <Hidden mdUp>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        style={{
                          fontSize: "38px",
                          cursor: "pointer",
                          color: "#FFFFFF",
                        }}
                      ></MenuIcon>
                    </Button>
                    <Paper>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
