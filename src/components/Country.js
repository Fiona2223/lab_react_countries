const Country = ({ country, visitedCountry}) => {
    return (
        <li>
      {country.flag} {country.name.common + " "}
      <button onClick={() => visitedCountry(country)}>Already visited</button>
    </li>
      );
};

export default Country;