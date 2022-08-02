import ReactPaginate from 'react-paginate';
import axios from "axios"
import { useEffect, useState } from "react";
import MovieCard from './movieCard';
import styled from "styled-components";
import { device } from '../../device';


const Container = styled.div`
  display: grid;
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


let limit = 6;

const Movies = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData();
    }, [limit]);


    const dataInstance = axios.create({
        baseURL: `https://api.jikan.moe/v4/anime?page=1&limit=${limit}`,
        // baseURL: "",
    });


    const getData = async () => {
        const res = await dataInstance.get(``);
        let data = res.data.data;
        setItems(data);
        setIsLoading(true);
    };


    const fetchAnime = async (currentPage) => {
        const res = await fetch(
            `https://api.jikan.moe/v4/anime?page=${currentPage}&limit=${limit}`
        );
        const data = await res.json();
        console.log("data", data.data)
        return data.data;
    };

    const handlePageClick = async (data) => {
        console.log(data.selected);

        let currentPage = data.selected + 1;

        const dataFromServer = await fetchAnime(currentPage);

        setItems(dataFromServer);
        // scroll to the top
        window.scrollTo(0, 0)
    };
    return <>
        <Container>
            {
                isLoading && items.map((el, index) => {
                    return (
                        <MovieCard
                            key={el.mal_id}
                            animeName={el.title}
                            animeImg={el.images.jpg.image_url}
                            animeDesc={el.synopsis}
                            whole={el}
                            episodes={el.episodes}
                            rating={el.score}
                        />
                    )
                })
            }
        </Container>

        <br></br><br></br>

        <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={4}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
        <br></br>
    </>
}

export { Movies }