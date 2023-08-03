import data from "./../data.json";
import { useState } from "react";

const projects = data;

export default function MyProjects() {
  const [index, setIndex] = useState(0);
  function handleClick() {
    if (index < projects.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  // const jsonData = data;
  // const itemAtIndex = jsonData[index];
  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h3>{data[index].resort}</h3>
      <ul>{`Base Elevation: ${data[index].baseElevation}`}</ul>
      <ul>{`Number of Ski Lifts: ${data[index].skiLifts}`}</ul>
      <ul>{`Number of Runs: ${data[index].runs}`}</ul>
    </div>
  );
}
