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

const Movies = () => {
    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        getData()
    }, [])
    const dataInstance = axios.create({
        baseURL: "https://api.jikan.moe/v4/anime?page=2&limit=15",
        // baseURL: "",
    })

    const getData = async () => {
        const res = await dataInstance.get(``);
        let data = res.data.data;
        setItems(data);
        setIsLoading(true);
    }

    const handlePageClick = async (data) => {
        console.log(data.selected);

        let currentPage = data.selected + 1;

        // const commentsFormServer = await fetchComments(currentPage);

        // setItems(commentsFormServer);
        // scroll to the top
        //window.scrollTo(0, 0)
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
        <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
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
        Im movies
    </>
}

export { Movies }