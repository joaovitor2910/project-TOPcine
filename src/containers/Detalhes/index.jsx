import { useContext, useEffect, useState } from "react";
import {
  getById,
  getCredits,
  getSimilar,
  getTrailers,
} from "../../services/getData";
import { useParams } from "react-router-dom";
import { Background, Container, ContainerMovies, Cover, Info } from "./styles";
import { getImages } from "../../services/utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import { UserContext } from "../../contexts/UserContext";
import { SliderSimilar } from "../../components/Slider";
import { ContainerSpin } from "../Home/styles";
import { Spinner } from "../../components/Modal/styles";

function Detalhes() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [credits, setCredits] = useState();
  const [similar, setSimilar] = useState();
  const [videos, setVideos] = useState();
  const { type, loading, setLoading, setType } = useContext(UserContext)

  
  useEffect(() => {
    setLoading(true)
    const loadingComponent = async () => 
    await new Promise((res) => setTimeout(res, 400)).then(() => {
      async function getAllData() {
      Promise.all([
        getById(type, id),
        getTrailers(type, id),
        getCredits(type, id),
        getSimilar(type, id),
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
  }).finally(() => setLoading(false))
  loadingComponent()
  window.scrollTo(0, 0)
  }, [id]);

  return (
    <>
    {loading ? 
        (
          <ContainerSpin>
          <Spinner />
          </ContainerSpin>
        )
        :
        (
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
          {similar && <SliderSimilar info={similar} title={"Similares"} />}
          </>
        )
      }
      </>
        
    )
  }
    </>
  );
}

export default Detalhes;
