import React from "react";
import classes from "./HobbyLinks.module.css";

export default function HobbyLinks() {
  const hobbyLinks = [
    "https://www.earthtrekkers.com/best-hikes-in-rocky-mountain-national-park/",
    "https://justynjen.com/7-incredible-hikes-in-big-cottonwood-canyon/",
    "https://anthology-magazine.com/arts/pipe-organs/",
  ];
  return (
    <div className={classes.hobbiesDiv}>
      <h3 className={classes.hobbiesHeading}>My Hobbies</h3>
      <a className={classes.hobbiesText} href={hobbyLinks[0]}>
        Hiking in Rocky Mountain National Park
      </a>
      <br></br>
      <a className={classes.hobbiesText} href={hobbyLinks[1]}>
        Hiking in Big Cottonwood Canyon
      </a>
      <br></br>
      <a className={classes.hobbiesText} href={hobbyLinks[0]}>
        Amazing Pipe Organs
      </a>
    </div>
  );
}
