const VisitedCountry = ({country, visitCountry, Country, visitedCountries}) => {
     
    return ( 
        <>
            <h2>{`${country.name.common} ${country.flag}`}</h2>
            <p>population: {country.population}</p>
            <p>Capital: {country.capital}</p>
        </>
     );
}
 
export default VisitedCountry;