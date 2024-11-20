import React, { useEffect, useState } from 'react';
import Countries from './Countries';
import './index.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [continent, setContinent] = useState('');
  const [subregion, setSubregion] = useState('');
  const [top10ByPopulation, setTop10ByPopulation] = useState(false);
  const [top10ByArea, setTop10ByArea] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    filterCountries(value, continent, subregion, sortBy, top10ByPopulation, top10ByArea);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortBy(value);
    filterCountries(search, continent, subregion, value, top10ByPopulation, top10ByArea);
  };

  const handleContinentChange = (e) => {
    const value = e.target.value;
    setContinent(value);
    setSubregion(''); 
    filterCountries(search, value, '', sortBy, top10ByPopulation, top10ByArea);
  };

  const handleSubregionChange = (e) => {
    const value = e.target.value;
    setSubregion(value);
    setContinent('');
    filterCountries(search, '', value, sortBy, top10ByPopulation, top10ByArea);
  };

  const handleTop10ByPopulation = (e) => {
    const isChecked = e.target.checked;
    setTop10ByPopulation(isChecked);
    setTop10ByArea(false);  

    filterCountries(search, continent, subregion, sortBy, isChecked, false);
  };

  const handleTop10ByArea = (e) => {
    const isChecked = e.target.checked;
    setTop10ByArea(isChecked);
    setTop10ByPopulation(false); 
    filterCountries(search, continent, subregion, sortBy, false, isChecked);
  };

  const filterCountries = (search, continent, subregion, sortBy, top10ByPopulation, top10ByArea) => {
    let filtered = countries;

    if (search) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(search)
      );
    }

    if (continent) {
      filtered = filtered.filter((country) =>
        country.continents.includes(continent)
      );
    }

    if (subregion) {
      filtered = filtered.filter((country) => country.subregion === subregion);
    }

    if (sortBy) {
      filtered = filtered.sort((a, b) => {
        if (sortBy === 'name') return a.name.common.localeCompare(b.name.common);
        if (sortBy === 'population') return b.population - a.population;
        if (sortBy === 'area') return b.area - a.area;
        return 0;
      });
    }

    if (top10ByPopulation) {
      filtered = filtered.sort((a, b) => b.population - a.population).slice(0, 10);
    }

    if (top10ByArea) {
      filtered = filtered.sort((a, b) => b.area - a.area).slice(0, 10);
    }

    setFilteredCountries(filtered);
  };

  return (
    <div>
      <h1>Lab 6: Country Data</h1>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleSearch}
        />
        <select value={continent} onChange={handleContinentChange}>
          <option value="">Continent</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Americas">Americas</option>
          <option value="Antarctica">Antarctica</option>
        </select>
        <select value={subregion} onChange={handleSubregionChange}>
          <option value="">Subregion</option>
          <option value="Southern Europe">Southern Europe</option>
          <option value="Northern Africa">Northern Africa</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Polynesia">Polynesia</option>
        </select>
        <select value={sortBy} onChange={handleSort}>
          <option value="">Sort By</option>
          <option value="name">Alphabetically</option>
          <option value="population">Population</option>
          <option value="area">Area</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={top10ByPopulation}
            onChange={handleTop10ByPopulation}
          />
          Top 10 By Population
        </label>
        <label>
          <input
            type="checkbox"
            checked={top10ByArea}
            onChange={handleTop10ByArea}
          />
          Top 10 By Area
        </label>
      </div>
      <Countries countries={filteredCountries} />
    </div>
  );
};

export default App;
