import { useContext, useEffect, useState } from "react";
import {
  Background,
  CloseButton,
  Container,
  Spinner
} from "./styles";
import { getMoviesVideos, getSeriesVideos } from "../../services/getData";
import { UserContext } from "../../contexts/UserContext";
import { ContainerSpin } from "../../containers/Home/styles";

function Modal({ movieId, setShowModal, serieId }) {
  const { type } = useContext(UserContext);
  const [video, setVideo] = useState();
  const [loadingVideo, setLoadingVideo] = useState()

  useEffect(() => {
    setLoadingVideo(true)
      const loadingComponent = async () =>
        await new Promise((res) => setTimeout(res, 1000))
        .then(() => {
          async function getVideo() {
            if (movieId) {
              setVideo(await getMoviesVideos(type, movieId));
            } else {
              setVideo(await getSeriesVideos(type, serieId));
            }
          }
          getVideo()
        })
        .finally(() => setLoadingVideo(false))

        loadingComponent()        
  }, []);

  return (
        <Background onClick={() => setShowModal(false)}>
          {loadingVideo ?
            (
              <ContainerSpin>
              <Spinner />
              </ContainerSpin>
            )
          :
          (
          <>
          <CloseButton onClick={() => setShowModal(false)}>x</CloseButton>
          {video && (
            <Container>
              <iframe
                src={`https://www.youtube.com/embed/${video[0].key}`}
                title="YouTube video player"
                width="100%"
                height="500px"
              ></iframe>
            </Container>
          )}
          </>
        )
        }
        </Background>
    )}

export default Modal;
