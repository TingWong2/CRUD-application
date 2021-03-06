import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import "../styles/movieDetailPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const API_URL = "http://localhost:5005";

function MovieDetailPage({ img, title, mainActor, description }) {
  const [movie, setMovie] = useState(null);
  // We retrieved the movie id coming from the URL parameter movieId using the useParams hook.
  const { movieId } = useParams();
  const nagivate = useNavigate();

  //***** Display one specific movie by it ID *****/
  // * helper function with axios that make the get request to the API to retrieves the movie by the id

  const getMovie = () => {
    axios
      .get(`${API_URL}/api/movies/${movieId}`)
      .then((response) => {
        const oneMovie = response.data;
        console.log("===> DetailPage response.data", response.data);
        setMovie(oneMovie);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //*** added an effect that will run only once, after the initial render.
  //*** So as soon as the component renders for the first time, the effect will run and it will call
  //*** the getMovie() function to fetch the movie and set it in the state (state variable movie). */
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //*** the effect should run only once by setting the empty dependency array [].

  //***** Delete a specific movie *****/
  const deleteMovie = () => {
    // make a delete request to delete the movie
    axios
      .delete(`${API_URL}/api/movies/${movieId}`)
      .then((response) => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        nagivate("/movies");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="oneMovieWrapper">
      {movie && (
        <>
          <Card
            movieId={movie._id}
            img={movie.imageUrl}
            title={movie.title}
            mainActor={movie.mainActor}
            description={movie.description}
            genres={
              movie.genres &&
              movie.genres.map((g) => {
                return (
                  <span className="genre" key={g._id}>
                    {" "}
                    {g.name}{" "}
                  </span>
                );
              })
            }
          />
          <div className="buttonLink">
            <Link to="/movies">
              <Button variant="primary" size="sm">
                Back to movies
              </Button>{" "}
            </Link>
            <Link to={`/movies/edit/${movieId}`}>
              <Button variant="primary" size="sm">
                Edit movie
              </Button>{" "}
            </Link>
            <Button variant="primary" size="sm" onClick={deleteMovie}>
              Delete
            </Button>{" "}
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetailPage;
