export default function HobbyLinks() {
  const hobbyLinks = [
    "https://www.earthtrekkers.com/best-hikes-in-rocky-mountain-national-park/",
    "https://justynjen.com/7-incredible-hikes-in-big-cottonwood-canyon/",
    "https://anthology-magazine.com/arts/pipe-organs/",
  ];
  return (
    <div>
      <h3>My Hobbies</h3>
      <a href={hobbyLinks[0]}>Hiking in Rocky Mountain National Park</a>
      <a href={hobbyLinks[1]}>Hiking in Big Cottonwood Canyon</a>
      <a href={hobbyLinks[0]}>Amazing Pipe Organs</a>
    </div>
  );
}
