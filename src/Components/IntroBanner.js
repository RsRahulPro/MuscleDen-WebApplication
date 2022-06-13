import React from "react";
import {Box, Stack, Typography} from "@mui/material";

import IntroBannerImage from "../Assets/images/banner.png";

const IntroBanner = () => (
  <Box sx={{mt: {lg: "120px", xs: "70px"}, ml: {sm: "50px"}, minHeight: "100vh"}} position="relative" p="20px">
    <Typography color="#0e1398" fontWeight="600" fontSize="45px" fontFamily="montserrat">
      Muscle Den
    </Typography>
    <Typography fontWeight={700} fontFamily="montserrat" sx={{fontSize: {lg: "34px", xs: "30px"}}} mb="23px" mt="30px">
      Go hard or
      <br />
      Go home!
    </Typography>
    <Typography fontSize="22px" fontFamily="montserrat" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "black",
          padding: "14px",
          fontSize: "18px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      fontFamily="montserrat"
      color="black"
      sx={{opacity: "0.1", display: {lg: "block", xs: "none"}, fontSize: "150px", position: "relative", left: "280px", bottom: "30px"}}
    >
      MUSCLE
    </Typography>
    <img src={IntroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default IntroBanner;
