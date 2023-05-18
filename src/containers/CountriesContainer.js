import { useEffect, useState } from "react";
import Country from "../components/Country";
import VisitedCountry from "../components/VisitedCountry";

const CountriesContainer = ({}) => {

    const[countries, setCountries] = useState([]);
    const[visitedCountries, setVisitedCountries] = useState([]);

    const fetchCountries = async () =>{
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        fetchCountries();
    }, [])


    const countryComponents = countries.map((country, index) => {
        return <Country country={country} key={index} />
    });

    const visitedCountryComponents = visitedCountries.map(country => <VisitedCountry country={country}/>);

    

}

export default CountriesContainer;