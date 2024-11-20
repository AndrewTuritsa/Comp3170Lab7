import React from 'react';
import Country from './Country';

const Countries = ({ countries }) => {
  return (
    <div className="countries">
      {countries.map((country, index) => (
        <React.Fragment key={country.cca3}>
          <Country country={country} />
          {index < countries.length - 1 && <hr className="country-divider" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Countries;
