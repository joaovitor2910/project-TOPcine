import { useEffect, useState } from "react";
import { Background, CloseButton, Container } from "./styles";
import api from "../../services/api";
import { getVideos } from "../../services/getData";

function Modal({ movieId, setShowModal }) {
  const [video, setVideo] = useState();

  useEffect(() => {
    async function getVideo() {
      setVideo(await getVideos(movieId));
    }

    getVideo();
  }, []);

  return (
      <Background onClick={() => setShowModal(false)}>
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
        </Background>
  );
}

export default Modal;
