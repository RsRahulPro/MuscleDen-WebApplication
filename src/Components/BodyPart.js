import React from "react";
import {Stack, Typography} from "@mui/material";
import Icon from "../Assets/icons/gym.png";

const BodyPart = ({item, setBodyPart, bodyPart}) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            border: "1px solid black",
            borderTop: "4px solid #0E1398",
            background: "#fff",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
            fontFamily: "montserrat",
          }
        : {
            background: "#fff",
            fontFamily: "montserrat",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
            border: "1px solid black",
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({top: 1800, left: 100, behavior: "smooth"});
    }}
  >
    <img src={Icon} alt="dumbbell" style={{width: "50px", height: "50px"}} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="montserrat" color="#3A1212" textTransform="capitalize">
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
