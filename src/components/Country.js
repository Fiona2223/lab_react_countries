import VisitedCountry from "./VisitedCountry";

const Country = ({ country, markAsVisited}) => {

    const completedButton= (e) => {
        markAsVisited(country);
    }

    return (
        <>
        <div className="countries"></div>
          <h2>{`${country.name.common} ${country.flag}`}</h2>
          <p>Population: {country.population}</p>
          <p>Capital: {country.capital}</p>
          <input type={"checkbox"} id={"visited_countries"} 
          onClick={() => fetch(markAsVisited)}/>
          <label htmlFor="visited">Mark As visited</label>  
        </>
      );
   
};

export default Country;


