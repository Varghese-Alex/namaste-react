const RestaurantCard = (props) => {
  const { restData } = props;

  const { imgLink, restName, restRating, expTime, restCuisines } = restData;

  return (
    <div className="rest-card">
      <img className="rest" alt="rest-image" src={imgLink} />
      <h3>{restName}</h3>
      <h4>{restRating}</h4>
      <h4>{expTime}</h4>
      <h5>{restCuisines}</h5>
    </div>
  );
};

export default RestaurantCard;
