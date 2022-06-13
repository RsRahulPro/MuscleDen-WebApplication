import React, {useState} from "react";
import {Box} from "@mui/material";
import IntroBanner from "../Components/IntroBanner";
import SearchExercises from "../Components/SearchExercises";
import Exercises from "../Components/Exercises";

const Home = () => {
  return (
    <Box>
      <IntroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
