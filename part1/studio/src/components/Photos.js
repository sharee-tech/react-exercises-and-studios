import styles from "./Description.module.css";
import React from "react";

function RecipePhoto() {
  return (
    <img
      src="https://organicallyaddison.com/wp-content/uploads/2021/04/cassava_flour_brownies_15-700x1050.jpeg"
      alt="Cassava Brownies Image"
      className={styles.imageUpdates}
    />
  );
}

export default RecipePhoto;
