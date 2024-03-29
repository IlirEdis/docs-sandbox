import { styled } from "@mui/material";
import React from "react";
import { useTheme } from "nextra-theme-docs";

const Line = styled("path")({
  fill: "none",
  strokeWidth: "1.3",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  // mixBlendMode: blendMode,
  // mixBlendMode: "multiply",
  // mixBlendMode: "screen",
});
const RedLineColor1 = styled("stop")({
  stopColor: "#FF3A29",
});
const RedLineColor2 = styled("stop")({
  stopColor: "#E7D400",
});

const GreenLineColor1 = styled("stop")({
  stopColor: "#6F9D00",
});
const GreenLineColor2 = styled("stop")({
  stopColor: "#00D6D9",
});

const BlueLineColor1 = styled("stop")({
  stopColor: "#A429FF",
});
const BlueLineColor2 = styled("stop")({
  stopColor: "#2084FF",
});

export default function Logo(props) {
  const { theme, systemTheme } = useTheme();
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 159.5 49.4'
      fill={theme === "dark" || systemTheme === "dark" ? "#fff" : props.color}
      width={props.width}
      height={props.height}
      role='img'
    >
      <title>EDIS Global VPS</title>
      <g>
        <path
          d='M124.3,48.4c0.2-0.2,0.6-0.2,0.8,0c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0C124,49,124,48.6,124.3,48.4z
		'
        />
        <path
          d='M130.7,44.4c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.2,0.2-1.6,0.7c-0.4,0.5-0.7,1-0.7,1.7s0.2,1.2,0.7,1.7
		c0.4,0.5,1,0.7,1.6,0.7c0.6,0,1-0.2,1.4-0.5c0.4-0.3,0.6-0.7,0.6-1.2h-1.8v-0.7h2.7c0,2.1-1.1,3.2-2.9,3.2c-0.9,0-1.6-0.3-2.2-0.9
		c-0.6-0.6-0.9-1.4-0.9-2.3c0-0.9,0.3-1.6,0.9-2.3c0.6-0.6,1.4-0.9,2.2-0.9c0.8,0,1.5,0.3,2.1,0.8L130.7,44.4z'
        />
        <path d='M133.3,43.1h0.8v5.4h2.5v0.8h-3.4V43.1z' />
        <path
          d='M138.1,44c0.6-0.6,1.4-0.9,2.2-0.9c0.9,0,1.6,0.3,2.2,0.9c0.6,0.6,0.9,1.4,0.9,2.3c0,0.9-0.3,1.6-0.9,2.3
		c-0.6,0.6-1.4,0.9-2.2,0.9c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.3C137.1,45.3,137.5,44.6,138.1,44z M138.7,44.5
		c-0.4,0.5-0.7,1-0.7,1.7s0.2,1.2,0.7,1.7s1,0.7,1.6,0.7s1.2-0.2,1.6-0.7c0.4-0.5,0.7-1,0.7-1.7s-0.2-1.2-0.7-1.7
		c-0.4-0.5-1-0.7-1.6-0.7C139.6,43.8,139.1,44.1,138.7,44.5z'
        />
        <path
          d='M148,46c0.3,0.1,0.6,0.3,0.8,0.6c0.2,0.3,0.3,0.6,0.3,1c0,0.5-0.2,0.9-0.5,1.3c-0.3,0.3-0.8,0.5-1.3,0.5h-2.5
		v-6.2h2.3c1,0,1.7,0.6,1.7,1.6C148.8,45.4,148.5,45.8,148,46z M145.6,45.7h1.5c0.5,0,0.8-0.4,0.8-0.9s-0.4-0.9-0.9-0.9h-1.4V45.7z
		 M145.6,46.4v2.1h1.7c0.6,0,1-0.5,1-1c0-0.3-0.1-0.5-0.3-0.7c-0.2-0.2-0.4-0.3-0.7-0.3H145.6z'
        />
        <path d='M153.7,47.7h-2.6l-0.6,1.6h-0.9l2.4-6.2h0.9l2.3,6.2h-0.9L153.7,47.7z M151.4,47h2.1l-1-2.8L151.4,47z' />
        <path d='M156.1,43.1h0.8v5.4h2.5v0.8h-3.4V43.1z' />
      </g>
      <g>
        <path
          d='M115.9,16.2c-1.8-2-4.2-3-7.1-3c-3.3,0-6.2,1.3-8.7,3.7c-1.6,1.6-2.7,3.6-3.3,5.9c-0.5-2.4-1.7-4.4-3.4-6
		c-2.5-2.4-5.6-3.6-9.4-3.6s-7,1.3-9.6,3.7c-2.6,2.5-3.9,5.6-3.9,9.5c0,3.9,1.3,7.2,3.9,9.7c2.7,2.5,5.9,3.7,9.6,3.7
		c5.3,0,9.1-1.6,11.6-4.8c-0.3-0.2-1.3-0.9-3-2.1c-1.6-1.2-2.7-1.9-3.1-2.2c-1.2,1.4-2.8,2.1-4.9,2.1c-2.9,0-5.6-1.5-5.9-3.9h17.8
		c0.4,2.9,1.6,5.2,3.5,7.2c2.5,2.5,5.4,3.7,8.7,3.7c3.1,0,6.2-1.4,7.6-4.2v3.7h8.2V0.4h-8.7V16.2z M78.8,24.1c0.4-2,2.1-3.3,3.3-3.6
		c0.6-0.2,1.2-0.2,1.8-0.2c2,0,4.4,0.9,5.1,3.8H78.8z M114.3,30.3c-2,2-5.4,2-7.5,0c-2-2.1-2-5.5,0-7.5c2.1-2.1,5.5-2.1,7.5,0
		C116.5,24.9,116.5,28.2,114.3,30.3z'
        />
        <rect x='127.1' y='13.8' width='8.7' height='25.5' />
        <path d='M131.4,0.4c-2.8,0-5.3,2.1-5.3,4.9c0,2.7,2.4,5,5.3,5c2.9,0,5.2-2.2,5.2-5S134.3,0.4,131.4,0.4z' />
        <path
          d='M158.4,27.9c-0.8-1.6-3-3.1-6-3.9l-4.5-1.3c-1.3-0.3-1.9-0.8-1.9-1.6c0-0.9,0.7-1.4,2.1-1.4
		c1.7,0,2.6,0.8,2.6,2.3h8.2c0-6.6-5.8-8.8-11.2-8.8c-2.8,0-5.3,0.8-7.3,2.4c-2,1.5-3.1,3.3-3.1,5.3c0,1.1-0.1,1.6,0.4,3.2
		c0.3,0.8,0.7,1.5,1.2,2c1,1.1,3.2,2.6,6.2,3.4l3.2,0.9c1.9,0.5,2.3,0.8,2.3,1.5c0,1-1.2,1.7-2.7,1.7c-2,0-3-1.3-3-2.6h-8.2
		c0,2.8,1.1,5,3.3,6.6c2.2,1.6,4.9,2.4,7.8,2.4c3,0,5.7-0.7,8-2.1c2.4-1.4,3.5-3.4,3.5-6C159.5,30.6,159.3,29.5,158.4,27.9z'
        />
      </g>
      <linearGradient
        id='GreenLine'
        gradientUnits='userSpaceOnUse'
        x1='9.094947e-13'
        y1='23.593'
        x2='67.8208'
        y2='23.593'
      >
        <GreenLineColor1 offset='0' />
        <GreenLineColor2 offset='1' />
      </linearGradient>
      <Line
        style={{
          stroke: "url(#GreenLine)",
          mixBlendMode:
            theme == "dark" || systemTheme == "dark" ? "screen" : "multiply",
        }}
        d='M0.4,27.8c4,0,9.3,0,13-0.2c2.9-0.2,2.8-3.5,5.7-3.5c5.3-0.1,8.9,6.8,13.1,6.8c4.4,0,5.2-14.6,10.4-14.6
	c4.3,0,6.9,11.3,12.6,11.4c5.3,0.1,9.3,0.1,12.2,0'
      />
      <linearGradient
        id='BlueLine'
        gradientUnits='userSpaceOnUse'
        x1='3.284587e-04'
        y1='31.9382'
        x2='67.8208'
        y2='31.9382'
      >
        <BlueLineColor1 offset='0' />
        <BlueLineColor2 offset='1' />
      </linearGradient>
      <Line
        style={{
          stroke: "url(#BlueLine)",
          mixBlendMode:
            theme == "dark" || systemTheme == "dark" ? "screen" : "multiply",
        }}
        d='
	M0.4,27.7c4.8,0,11.7,0,16.8,0c4.3,0,7-3.7,9.3-3.7c3.7,0,6.4,15.7,13.9,15.7c5.3,0,6-15.7,10.4-15.7c3,0,5.2,3.6,7.4,3.6
	c4.3,0,7.1,0,9.3,0'
      />
      <linearGradient
        id='RedLine'
        gradientUnits='userSpaceOnUse'
        x1='2.132969e-04'
        y1='14.0759'
        x2='67.8208'
        y2='14.0759'
      >
        <RedLineColor1 offset='0' />
        <RedLineColor2 offset='1' />
      </linearGradient>
      <Line
        style={{
          stroke: "url(#RedLine)",
          mixBlendMode:
            theme == "dark" || systemTheme == "dark" ? "screen" : "multiply",
        }}
        d='
	M0.4,27.8c3,0,6.8,0,10.4-0.1c6-0.2,5.4-18.4,9.8-18.4c3.6,0,4.6,11.8,8.1,11.5c4.9-0.5,5-20.4,10.6-20.4c5.7,0,9.2,27.2,19.5,27.3
	c2.7,0,6.1,0,8.7,0'
      />
      <linearGradient
        id='BlueLine2'
        gradientUnits='userSpaceOnUse'
        x1='55.5967'
        y1='26.4321'
        x2='55.5967'
        y2='26.4321'
      >
        <BlueLineColor1 offset='0' />
        <BlueLineColor2 offset='1' />
      </linearGradient>
      <Line
        style={{
          stroke: "url(#BlueLine2)",
          mixBlendMode:
            theme == "dark" || systemTheme == "dark" ? "screen" : "multiply",
        }}
        d='M55.6,26.4'
      />
    </svg>
  );
}
