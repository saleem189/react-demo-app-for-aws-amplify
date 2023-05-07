import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './components/Navbar';
import Carosal from './components/Carosal';
import Search from './components/Search';
import MovieCard from './components/MovieCard';
import { useState } from 'react';
import Memo from './components/Memo';

function App() {
  const [movieCardData, setMovieCardData] = useState({});
  const [showMovieCard, setShowMovieCard] =useState(false);
  return (
    <>
    {/* <Container fluid>
      <NavBar />
    </Container>




    <Container className='mt-3'>
      <Search setMovieCardData={setMovieCardData} setShowMovieCard={setShowMovieCard}/>
    </Container>
    <Container>
      
      {showMovieCard ? <MovieCard Title={movieCardData.Title} Poster={movieCardData.Poster} Plot={movieCardData.Plot} Released={movieCardData.Released} Ratings={JSON.stringify(movieCardData.Ratings, null, 2)} Actors={JSON.stringify(movieCardData.Actors, null, 2)}/> : null}
    </Container> */}

    <Container>
      <Memo/>
    </Container>
    </>
  );
}

export default App;
