import React, {useEffect, useState} from "react";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";

import {exerciseOptions, fetchData} from "../Utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);
      setBodyParts(["All", ...bodyPartsData]);
    };
    fetchExerciseData();
  }, []);

  let searchHandler = async () => {
    if (search) {
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

      const searchedExercises = exercisesData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        );
      });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize: {lg: "44px", xs: "30px"}, fontFamily: "montserrat"}} mb="49px" textAlign="center">
        Try Out These Muscle Building
        <br /> Exercises!
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: {fontWeight: "400", border: "none", borderRadius: "4px"},
            width: {lg: "1170px", xs: "350px"},
            backgroundColor: "#fff",
            borderRadius: "40px",
            fontFamily: "montserrat",
          }}
          placeholder="Search Exercises"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <Button
          className="search-btn"
          onClick={searchHandler}
          sx={{
            bgcolor: "black",
            color: "#fff",
            textTransform: "none",
            width: {lg: "173px", xs: "80px"},
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: {lg: "20px", xs: "14px"},
            fontFamily: "montserrat",
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: "relative", width: "100%", p: "20px"}}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
