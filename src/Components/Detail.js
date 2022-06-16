import React from "react";
import {Typography, Stack, Button} from "@mui/material";

import BodyPartImage from "../Assets/icons/body-part.png";
import TargetImage from "../Assets/icons/target.png";
import EquipmentImage from "../Assets/icons/equipment.png";

const Detail = ({exerciseDetail}) => {
  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{flexDirection: {lg: "row"}, p: "0px", alignItems: "center", border: "2px solid black", borderRadius: "5px", marginTop: "-60px"}}
    >
      <img src={gifUrl} style={{borderRight: "2px solid black"}} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{gap: {lg: "35px", xs: "20px"}}}>
        <Typography sx={{fontSize: {lg: "44px", xs: "20px"}, fontFamily: "montserrat"}} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{fontSize: {lg: "20px", xs: "14px"}, fontFamily: "montserrat"}} color="#4F4C4C">
          Perform this exercise within 3 reps to failure to get maximum results. <span style={{textTransform: "capitalize"}}>{name}</span> is one of
          the best <br /> exercises to target your {target}. It will help you improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{background: "white", borderRadius: "50%", width: "100px", height: "100px", border: "2px solid black"}}>
              <img src={item.icon} alt={bodyPart} style={{width: "50px", height: "50px"}} />
            </Button>
            <Typography textTransform="capitalize" sx={{fontSize: {lg: "20px", xs: "20px"}}}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
