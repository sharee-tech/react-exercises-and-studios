import styles from "./Description.module.css";
import React from "react";

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>CASSAVA FLOUR BROWNIES</h1>
          <p>Paleo & Nut Free</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

function RecipeAuthor() {
  const authorLink = "https://organicallyaddison.com/about/";
  const authorPhoto =
    "https://organicallyaddison.com/wp-content/uploads/2023/05/WHITE-DRESS-scaled.jpg";
  const authorName = "Addison";

  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="Picture of Organically Addison"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>About Addison</a>
      </div>
    </div>
  );
}

export default RecipeDescription;
