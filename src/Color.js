import React from "react";
import { VariableSizeGrid as Grid } from "react-window";
import styled from "styled-components";
import Data from "./Data";

//Set each cell background color to unique rgb color.
const SingleColor = styled.div`
  background-color: rgb(
    ${({ colorComp }) => colorComp[0]},
    ${({ colorComp }) => colorComp[1]},
    ${({ colorComp }) => colorComp[2]}
  );
`;

//Get the data that contains 32768 unique colors.
const data = Data();

const Cell = ({ columnIndex, rowIndex, style }) => {
  //Use columnIndex and rowIndex to get the index of data Array.
  const number = columnIndex + rowIndex * 32;

  //Based on the index, get different rgb color components.
  const color = data[number];
  return (
    //Use different rgb color components to get unique colors.
    //The number is just the sign to show how many different colors has been shown on the palette.
    <SingleColor style={style} colorComp={color.colorComp}>
      {number}
    </SingleColor>
  );
};

//Generate a grid that contains 32768 cells, with 32 columns and 1024 rows.
const Color = () => (
  <Grid
    columnCount={32}
    columnWidth={() => 48}
    height={800}
    rowCount={1024}
    rowHeight={() => 40}
    width={1700}
  >
    {Cell}
  </Grid>
);

export default Color;
