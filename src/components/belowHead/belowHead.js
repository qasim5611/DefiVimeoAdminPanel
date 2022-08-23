import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Marquee from "react-fast-marquee";

export default () => {
  return (
    <Box>
      <Box
        style={{
          backgroundImage: "linear-gradient(to right, #FF8606, #FF6503)"
        }}
        pt={2}
        pb={2}
      >
        <Container>
          <Box border="1px solid white" borderRadius="30px" p={1}>
            <Box display="flex" alignItems="center">
              <Button
                sx={{
                  border: "1px solid white",
                  borderRadius: "30px",
                  width: "110px",
                  height: "35px",
                  backgroundImage:
                    "linear-gradient(to right, #FF8303, #FF9E19)",
                  fontSize: { xs: "11px", sm: "13px", md: "14px" },
                  fontFamily: "Helvetice-Bold",
                  boxShadow: 4,
                  color: "white"
                }}
              >
                updates <ArrowForwardIosIcon fontSize="16" />
              </Button>
              <Marquee direction="left" gradient={false} speed={70}>
                <Box
                  fontSize={{ xs: "12px", md: "14px" }}
                  fontFamily="Helvetice-Bold"
                >
                  Welcome To Ragdoll Cat NFT, Our Own Project Token (RDC).
                  Project Utilities: NFT Marketplace, To Buy/Sell & Collect NFT
                  For A Better Future. Live Cat Marketplace, To Buy/Sell Cats
                  Worldwide With Your Buyers/Sellers. Cat Lovers Community, A
                  Public Chatting Group For Registered Users. Stake & Earn, An
                  International Standard Staking Platform, Stake Your Asset To
                  Earn Up To 1000% APY. Buy Now And Get Up to 50% Bonus. Be
                  Whitelist To Participate In The Public Presale. Private Sale,
                  Phase-1 Price: 1 Bnb = 15,000,000. Phase-2 Price: 1 Bnb =
                  14,000,000. Phase-3 Price: 1 Bnb = 13,000,000. Public Presale
                  Price On Pinksale: 1 Bnb = 12,000,000. Launching Price On
                  Pancakeswap: 1 Bnb = 10,000,000. Thank You.
                </Box>
              </Marquee>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
