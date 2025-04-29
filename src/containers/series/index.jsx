import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { SliderSeries } from "../../components/Slider";
import { getImages } from "../../services/utils/getImages";
import { Background, Container, ContainerButton, Info, Poster } from "./styles";
import { useState, useEffect, useContext } from "react";
import {
  getPopularSeries,
  getSeries,
  getSeriesToday,
  getTopSeries,
} from "../../services/getData";
import { UserContext } from "../../contexts/UserContext";
import { ContainerSpin } from "../Home/styles";
import { Spinner } from "../../components/Modal/styles";

function Series() {
  const { setType, loading, setLoading } = useContext(UserContext)
  const [serie, setSerie] = useState();
  const [showModal, setShowModal] = useState(false);
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topSeriesToday, setTopSeriesToday] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    const loadingComponent = async () => 
    await new Promise((res) => setTimeout(res, 400)).then(() => {
    async function getAllData() {
      Promise.all([
        getSeries(),
        getPopularSeries(),
        getTopSeries(),
        getSeriesToday(),
     
      ])
        .then(([serie, popularSeries, topSeries, topSeriesToday]) => {
          setSerie(serie);
          setPopularSeries(popularSeries)
          setTopSeries(topSeries);
          setTopSeriesToday(topSeriesToday)
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
      {serie && (
        <Background $img={getImages(serie.backdrop_path)}>
          {showModal && (
            <Modal setShowModal={setShowModal} serieId={serie.id} />
          )}
          <Container>
            <Info>
              <h1>{serie.name}</h1>
              <p>{serie.overview}</p>
              <ContainerButton>
                <Button red onClick={() => {navigate(`/detalhes/${serie.id}`)
                setType('tv')
                }}>
                  Assista agora
                </Button>
                <Button onClick={() => {setShowModal(true)
                    setType('tv')
                }} red={false}>
                  Assista o trailer
                </Button>
              </ContainerButton>
            </Info>
            <Poster>
              <img alt="capa-do-filme" src={getImages(serie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
    {topSeries && <SliderSeries info={topSeries} title={"Mais bem avaliados"} />}

      {topSeriesToday && (
        <SliderSeries info={topSeriesToday} title={"Lançamentos"} />
      )}

      {popularSeries && 
        <SliderSeries info={popularSeries} title={"Séries populares"} />
      }
      </>
        )
      }
    </>
  );
}

export default Series;
