import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import img from "../assets/small-glass-ball.png";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundImage: `url(${img})`,
  width: "fit-content",
  filter: "brightness(1)",
  transition: "filter 0.2s",
  border: "solid 1px #ffffff50",
  "&:hover": {
    filter: "brightness(0.7)",
  },
}));

export default function CustomButton(props) {
  return (
    <ColorButton {...props} variant="contained" sx={props.sx}>
      {props.children}
    </ColorButton>
  );
}
