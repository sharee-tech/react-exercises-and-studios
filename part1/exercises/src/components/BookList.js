export default function BookList() {
  let pageTitle = "Favorite Books";
  let book1 =
    "https://upload.wikimedia.org/wikipedia/en/1/1f/Educated_%28Tara_Westover%29.png";
  let book2 =
    "https://upload.wikimedia.org/wikipedia/en/1/1f/Where_The_Crawdads_Sing_Book_Cover.jpg";
  let book3 =
    "https://m.media-amazon.com/images/I/51l2jSmOxpS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="Educated Book by Tara Westover" />
      <img src={book2} alt="Where the Crawdads Sing by Delia Owens" />
      <img src={book3} alt="The Sun is a Compass by Caroline Van Hemert" />
    </div>
  );
}
