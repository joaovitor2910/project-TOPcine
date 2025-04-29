import { Container } from "./styles";
import { getImages } from "../../services/utils/getImages";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


export function Card({ item, type }) {
  const { setType } = useContext(UserContext)
  const navigate = useNavigate()
  return (
    <Container>
      <img onClick={() => {
        navigate(`/detalhes/${item.id}`)
        setType(type)
      }} src={getImages(item.poster_path || item.profile_path || '')} alt="" />
      <h3>{item.title || item.name}</h3>
    </Container>
  );
}

export function CardPeople({ item }) {
  return (
    <Container>
      <img style={{cursor: "default"}} src={getImages(item.poster_path || item.profile_path || '')} alt="" />
      <h3>{item.title || item.name}</h3>
    </Container>
  );
}


