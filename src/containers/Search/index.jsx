import { useContext, useEffect, useState } from "react";
import { getSearch } from "../../services/getData";
import { UserContext } from "../../contexts/UserContext";
import { Card, Container, Poster } from "./styles";
import { getImages } from "../../services/utils/getImages";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../components/Modal/styles";
import { ContainerSpin } from "../Home/styles";

function Search() {
  const navigate = useNavigate();
  const { search, loading, setType, setLoading } = useContext(UserContext);
  const [searchData, setSearchData] = useState();
  useEffect(() => {
    setLoading(true)
    const loadingPage = async () => 
      await new Promise((res) => setTimeout(res, 1000)
    ).then(() => {
    async function getSearchData() {
      setSearchData(await getSearch(search));
    }
    getSearchData();
  }).finally(() => setLoading(false))
  loadingPage()
  }, [search]);

  return (
    
    <>
      {loading ? (
        <ContainerSpin>
        <Spinner />
        </ContainerSpin>
      )
      :
      (
      <Container>
      {searchData &&
        searchData.map((item) => (
          <Card image={item.poster_path} key={item.id}>
            <Poster
              onClick={() => {
                navigate(`/detalhes/${item.id}`);
                setType(item.media_type);
              }}
            >
              <img src={getImages(item.poster_path)} alt="card" />
              <p>{item.title || item.name}</p>
            </Poster>
          </Card>
        ))}
      </Container>
      )
      } 
    </>
  );
}

export default Search;
