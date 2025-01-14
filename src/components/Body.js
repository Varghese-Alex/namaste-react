import RestaurantCard from "./RestaurantCard";
import restData from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Top ⭐ Restaurants");
          }}
        >
          Top ⭐ Restaurants
        </button>
      </div>
      <div className="rest-container">
        {restData.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
