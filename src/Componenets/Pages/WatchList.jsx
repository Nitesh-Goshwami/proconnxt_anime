import styled from "styled-components";
import { device } from "../../device";
import MovieCard from "./movieCard";

const Container = styled.div`
  display: grid;
  width:90%;
  margin:auto;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  @media ${device.mobileS} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobileM} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const WatchList = () => {
    const data = JSON.parse(localStorage.getItem("watchList") || "[]");
    return <>
        <Container>
            {
            data.length !== 0 ?
                data.map((el, index) => {
                    return (
                        <MovieCard
                            key={el.mal_id}
                            animeName={el.title}
                            animeImg={el.images.jpg.image_url}
                            animeDesc={el.synopsis}
                            genres={el.genres[0].name}
                            whole={el}
                            episodes={el.episodes}
                            rating={el.score}
                        />
                    )
                }) :
                <h1 style={{ textAlign: "center"}}>"Nothing in watch List"</h1> 
            }
        </Container>
    </>
}

export { WatchList }