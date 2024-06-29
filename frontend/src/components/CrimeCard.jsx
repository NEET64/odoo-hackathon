const CrimeCard = ({ crime }) => {
  return (
    <div className="border-2 border-black rounded-lg p-4 flex flex-col justify-center items-center m-2">
      <h1>{crime.typeOfCrime}</h1>
      <p>{crime.location.address}</p>
      <p>{crime.time}</p>
      <p>{crime.description}</p>
      {/* <img src={crime.media.photos[0]} alt="photo" />
      <video src={crime.media.videos[0]} controls /> */}
    </div>
  );
};

export default CrimeCard;
