import React from "react";
import classes from "./ChoresList.module.css";

export default function ChoresList() {
  const chores = ["Empty Dishwasher", "Complete Prep Work", "Buy Groceries"];

  return (
    <div>
      <h3 className={classes.choresHeading}>Today's Chores</h3>
      <ul>
        <li className={classes.choresText}>{chores[0]}</li>
        <li className={classes.choresText}>{chores[1]}</li>
        <li className={classes.choresText}>{chores[2]}</li>
      </ul>
    </div>
  );
}
