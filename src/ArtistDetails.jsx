function ArtistDetails({ artist }) {
    return (
      <div className="artist-details">
        <h2>{artist.name}</h2>
        <img src={artist.photo_url} height={100} width={150}/>
        <p>Country: {artist.country}</p>
        <p>Years Active: {artist.years_active}</p>
      </div>
    );
  }
  
  export default ArtistDetails;
  