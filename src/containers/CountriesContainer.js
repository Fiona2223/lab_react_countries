import { useEffect, useState } from "react";
import Country from "../components/Country";

const CountriesContainer = ({}) => {

    const[countries, setCountries] = useState([]);
    const[visitedCountries, setVisitedCountries] = useState([]);
    const[markAsVisited, setMarkAsVisited] = useState([]);

    const fetchCountries = async () =>{
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();

        setCountries(jsonData);
    }

    useEffect(() => {
        fetchCountries();
    }, [])

    const countryComponents = countries.map((country) => {
        return <Country country={country}/>
    });

    const visitedCountryComponents = visitedCountries.map((visitedCountry) => {
        return <Country visitedCountry={visitedCountry} />
    });

    return ( 
        <>
            <div id='List_of_countries'>
                <h2>Countries</h2>
                {countryComponents}
            </div>
    
            <div id='visited_countries'>
                <h2>Visited Coutries</h2>
                {visitedCountryComponents}
            </div> 
          </>
         );

    }

   

export default CountriesContainer;