import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/name/kingdom');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleCountrySelect = (event) => {
    const selectedCca2 = event.target.value;
    if (selectedCca2) {
      const selectedCountry = countries.find((country) => country.cca2 === selectedCca2);
      navigate(`/countries/${selectedCca2}`, { state: selectedCountry });
    }
  };

  return (
    <div>
      <h1>World Kindgoms</h1>
      {loading ? (
        <p>Loading countries...</p>
      ) : (
        <div>
          <label htmlFor="country-select">Select a country:</label>
          <select id="country-select" onChange={handleCountrySelect}>
            <option value="">-- Select a country --</option>
            {countries.map((country) => (
              <option key={country.cca2} value={country.cca2}>
                {country.name.common}
              </option>
            ))}
          </select>
        </div>
      )}
      <Outlet /> 
    </div>
  );
};

export default Countries;
