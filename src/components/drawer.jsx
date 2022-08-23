import React from "react";
import { List, ListItem, ListItemText, Button } from "@mui/material";
import { Box } from "@mui/system";
import { HashLink } from "react-router-hash-link";
import { makeStyles } from "@mui/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles({
  listText: {
    textAlign: "center",
    textDecoration: "none",
    cursor: "pointer",
    color: "#ffffff",
    fontSize: "15px",
    fontFamily: "Helvetice-Bold"
  }
});

const StyledMenu = styled((props) => (
  <Menu
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 180,
    color: "white",
    backgroundImage: "linear-gradient(to bottom right, #FF6503, #FF8105)",

    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0"
    }
  }
}));

export default () => {
  const classes = useStyles();
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

  return (
    <>
      <Box mt={-20} display="flex" justifyContent="center">
        <HashLink smooth to="/home#home" style={{ textDecoration: "none" }}>
          <img width="100px" src="/images/logo.png" alt="" />
        </HashLink>
      </Box>
      <List>
        {/* {["HOME", "QUICKS LINKS", "UTILITIES", "DOCUMENTS", "COMMUNITY"].map(
          (text, index) => ( */}
        <ListItem
          button
          style={{
            justifyContent: "center"
          }}
          // key={text}
        >
          <HashLink smooth to="/home#home" style={{ textDecoration: "none" }}>
            <ListItemText className={classes.listText} primary={"Home"} />
          </HashLink>
        </ListItem>

        <ListItem
          button
          style={{
            justifyContent: "center"
          }}
        >
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{
              color: "white",
              textTransform: "capitalize",
              fontFamily: "Helvetice-Bold",
              fontSize: "15px"
            }}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            QuickLinks
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button"
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <HashLink
              smooth
              to="/home#NFT Marketplace"
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem onClick={handleClose} disableRipple>
                NFT Marketplace
              </MenuItem>
            </HashLink>

            <HashLink
              smooth
              to="/home#Tokenomics"
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem onClick={handleClose} disableRipple>
                Tokenomics
              </MenuItem>
            </HashLink>

            <HashLink
              smooth
              to="/home#Public Presale"
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem onClick={handleClose} disableRipple>
                Public Presale
              </MenuItem>
            </HashLink>

            <HashLink
              smooth
              to="/home#Dev Team"
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem onClick={handleClose} disableRipple>
                Dev Team
              </MenuItem>
            </HashLink>

            <HashLink
              smooth
              to="/home#Blog"
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem onClick={handleClose} disableRipple>
                Blog
              </MenuItem>
            </HashLink>

            <HashLink
              smooth
              to="/home#about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem onClick={handleClose} disableRipple>
                About
              </MenuItem>
            </HashLink>

            <HashLink
              smooth
              to="/home#private presale"
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem onClick={handleClose} disableRipple>
                Private Presale
              </MenuItem>
            </HashLink>

            <HashLink
              smooth
              to="/home#listings"
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem onClick={handleClose} disableRipple>
                Listing
              </MenuItem>
            </HashLink>

            <HashLink
              smooth
              to="/home#road map"
              style={{ textDecoration: "none", color: "white" }}
            >
              <MenuItem onClick={handleClose} disableRipple>
                RoadMap
              </MenuItem>
            </HashLink>
          </StyledMenu>
        </ListItem>

        <ListItem
          button
          style={{
            justifyContent: "center"
          }}
        >
          <HashLink
            smooth
            to="/home#rogdollcatnft"
            style={{ textDecoration: "none" }}
          >
            <ListItemText className={classes.listText} primary={"Utilities"} />
          </HashLink>
        </ListItem>

        <ListItem
          button
          style={{
            justifyContent: "center"
          }}
        >
          <ListItemText className={classes.listText} primary={"Documents"} />
        </ListItem>

        <ListItem
          button
          style={{
            justifyContent: "center"
          }}
        >
          <ListItemText className={classes.listText} primary={"Community"} />
        </ListItem>
        {/* )
        )} */}
      </List>
    </>
  );
};
