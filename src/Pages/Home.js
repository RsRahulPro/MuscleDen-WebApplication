import React, {useState} from "react";
import {Box} from "@mui/material";
import IntroBanner from "../Components/IntroBanner";
import SearchExercises from "../Components/SearchExercises";
import Exercises from "../Components/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <IntroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
