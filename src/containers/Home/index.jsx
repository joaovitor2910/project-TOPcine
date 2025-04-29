import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { SliderMovies, Slider, SliderSeries } from "../../components/Slider";
import { getImages } from "../../services/utils/getImages";
import { Background, Container, ContainerButton, ContainerSpin, Info, Poster } from "./styles";
import { useState, useEffect, useContext } from "react";
import {
  getMovies,
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries,
} from "../../services/getData";
import { UserContext } from "../../contexts/UserContext";
import { Spinner } from "../../components/Modal/styles";

function Home() {
  const [movie, setMovie] = useState();
  const [showModal, setShowModal] = useState(false);
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const navigate = useNavigate();
  const {setType, loading, setLoading} = useContext(UserContext)

  useEffect(() => {
    setLoading(true)
    const loadingComponent = async () => 
    await new Promise((res) => setTimeout(res, 1000)).then(() => {

    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople(),
      ])
        .then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
          setMovie(movie);
          setTopMovies(topMovies);
          setTopSeries(topSeries);
          setPopularSeries(popularSeries);
          setTopPeople(topPeople);
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
      <ContainerSpin>
      <Spinner />
      </ContainerSpin>
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
              }
              
              }>
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
      {topMovies && <SliderMovies info={topMovies} title={"Top Filmes"} />}
      {topSeries && <SliderSeries info={topSeries} title={"Top Séries"} />}
      {popularSeries && (
        <SliderSeries info={popularSeries} title={"Séries Populares"} />
      )}
      {topPeople && <Slider info={topPeople} title={"Artistas Populares"} />}

    </>
    )
  }
  </>
  );
}


export default Home;
