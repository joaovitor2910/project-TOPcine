import { useEffect, useState } from "react";
import {
  getCredits,
  getMovieById,
  getMovieVideos,
  getSimilar,
} from "../../services/getData";
import { useParams } from "react-router-dom";
import { Background, Container, ContainerMovies, Cover, Info } from "./styles";
import { getImages } from "../../services/utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";

function Detalhes() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [credits, setCredits] = useState();
  const [similar, setSimilar] = useState();
  const [videos, setVideos] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getCredits(id),
        getSimilar(id),
      ])
        .then(([movie, videos, credits, similar]) => {
          setMovie(movie);
          setVideos(videos);
          setCredits(credits);
          setSimilar(similar);
        })
        .catch(error => error);
    }
    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <>
          <Background $image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={credits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {videos &&
              videos.map((video) => (
                <div key={video.id}>
                  <h4>{movie.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="YouTube video player"
                    width="100%"
                    height="500px"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {similar && <Slider info={similar} title={"Filmes Similares"} />}
        </>
      )}
    </>
  );
}

export default Detalhes;
