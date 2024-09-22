import { artists } from './best-selling-music-artists'; 
import ArtistDetails from './ArtistDetails'; 

function App() {
  return (
    <div className="app">
      <h1>Best-Selling Music Artists</h1>
      <div className="artist-list">
        {artists.map((artist, index) => (
          <ArtistDetails key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
}

export default App;
