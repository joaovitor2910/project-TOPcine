import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { SliderMovies } from "../../components/Slider";
import { getImages } from "../../services/utils/getImages";
import { Background, Container, ContainerButton, Info, Poster } from "./styles";
import { useState, useEffect, useContext } from "react";
import {
  getMovies,
  getMoviesNowPlaying,
  getPopularMovies,
  getTopMovies,
} from "../../services/getData";
import { UserContext } from "../../contexts/UserContext";
import { ContainerSpin } from "../Home/styles";
import { Spinner } from "../../components/Modal/styles";

function Movies() {
  const { setType, loading, setLoading } = useContext(UserContext)
  const [movie, setMovie] = useState();
  const [showModal, setShowModal] = useState(false);
  const [topMovies, setTopMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [topMoviesToday, setTopMoviesToday] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    const loadingComponent = async () => 
    await new Promise((res) => setTimeout(res, 400)).then(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getPopularMovies(),
        getTopMovies(),
        getMoviesNowPlaying()
     
      ])
        .then(([movie, popularMovies, topMovies, topMoviesToday]) => {
          setMovie(movie);
          setPopularMovies(popularMovies)
          setTopMovies(topMovies);
          setTopMoviesToday(topMoviesToday)
        })
        .catch(error => error);
    }
    getAllData();
  }).finally(() => setLoading(false))
  loadingComponent()
  }, []);

  return (
    <>
    {loading ? 
        (
          <Background>
            <Spinner />
          </Background>
        )
        :
        (
        <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal setShowModal={setShowModal} movieId={movie.id} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButton>
                <Button red onClick={() => {navigate(`/detalhes/${movie.id}`)
                setType('movie')
                }}
              >
                  Assista agora
                </Button>
                <Button onClick={() => {setShowModal(true)
                  setType('movie')
                }} red={false}>
                  Assista o trailer
                </Button>
              </ContainerButton>
            </Info>
            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMoviesToday && (
        <SliderMovies info={topMoviesToday} title={"Lançamentos"} />
      )}
      
      {topMovies && <SliderMovies info={topMovies} title={"Mais bem avaliados"} />}

      {popularMovies && 
        <SliderMovies info={popularMovies} title={"Filmes populares"} />
      }
      </>
      )
    }
    </>
  );
}

export default Movies;
