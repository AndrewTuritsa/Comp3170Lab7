import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Details = () => {
  const { cca2 } = useParams(); 
  const location = useLocation(); 
  const country = location.state; 
  if (!country) {
    return <p>Country details not found. Please select a country from the dropdown.</p>;
  }

  return (
    <div>
      
      <h2 style={{ textAlign: 'center' }}>Country Details:</h2>
      <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
      <p><strong>Subregion:</strong> {country.subregion || 'N/A'}</p>
      <div>
      <img 
        src={country.flags?.svg || country.flags?.png || ''} 
        alt={`${country.name.common} flag`} 
        style={{ width: '300px', height: 'auto', display: 'block', margin: '0 auto' }} 
      />
      </div>
    </div>
  );
};

export default Details;
