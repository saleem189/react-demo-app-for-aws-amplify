/* eslint-disable jsx-a11y/anchor-is-valid */
import '../movie_card.css'
const MovieCard = ({Title, Poster, Plot, Released, Ratings, Actors}) => {

    const parse_rating = JSON.parse(Ratings);
    const parse_actors = JSON.parse(Actors);
    // console.log(Actors, parse_actors);
    return (

            <div className="grid-wrapper" id='movieCardDetail'>
            <div className="card-container box">
                <div className="card-flip">
                <div className="card front">
                <img src={Poster} className="card-img-top img-fluid" alt="movie-poster"></img>
                    <div className="card-block">
                    <h5 className="card-title">{Title}</h5>
                        <p className="card-text">{Plot}</p>
                            <p className="card-text"><small className="text-muted">{Released}</small></p>
                    </div>
                </div>                
                <div className="card back">
                <div className="card-header warning-color"></div>
                    <div className="card-block text-center">
                    <h4 className="card-title">IMDB Rating</h4>
                        <p className="card-text">
                            <a href="#" className="rating">{parse_rating[0].Value}</a>
                        </p>
                    <a href="#" className="btn orange">Watch</a>
                    </div>

                    <div className="card-block text-center">
                    <h4 className="card-title">Actors</h4>
                        <p className="card-text">
                            {parse_actors}
                        </p>
                    </div>
                    <img className="movie" src="https://i.ibb.co/2Kqn5L9/Blood-Prison.png" alt="back-img"></img>
                </div>
                </div>
            </div>
            </div>

        );
}
export default MovieCard;