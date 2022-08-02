import { useParams } from "react-router-dom"

import axios from "axios"
import { useEffect, useState } from "react";
import ImgMediaCard from "../MicroComponents/Card";
const AnimeDetail = () => {
    const params = useParams();
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);


    const dataInstance = axios.create({
        baseURL: `https://api.jikan.moe/v4/anime`,
        // baseURL: "",
    });


    const getData = async () => {
        const res = await dataInstance.get(``);
        let data = res.data.data;
        const temp = data.filter((el) => el.mal_id == params.id);
        console.log("temp", temp)
        setItems(temp);
        setIsLoading(true);
    };
    return <>
        {
            isLoading &&
            <ImgMediaCard
                uri={items[0].images.jpg.image_url}
                heading={items[0].title}
                rating={items[0].score}
                episodes={items[0].episodes}
                description = {items[0].synopsis}
            />
        }
    </>
}

export { AnimeDetail }