import ImageSlider from "./ImageSlider";
import axios from "axios"
import { useEffect, useState } from "react";
import { Popular } from "../MicroComponents/Popular";
import { Action } from "../MicroComponents/Action";
import { MostWatched } from "../MicroComponents/MostWatched";
const Home = () => {
    const [animeData, setAnimeData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        getData()
    }, [animeData])
    const dataInstance = axios.create({
        baseURL: "https://api.jikan.moe/v4/anime",
        // baseURL: "",
    })

    const getData = async () => {
        const res = await dataInstance.get(``);
        let data = res.data.data;
        setAnimeData(data);
        setIsLoading(true);
    }
    const containerStyles = {
        width: "80%",
        height: "480px",
        margin: "0 auto",
    };
    const sliderStyles = {
        width: "90%",
        height: "380px",
        margin: "0 auto",
    };
    return (
        <div>
            <div style={containerStyles}>
                {
                    isLoading === true ? <ImageSlider slides={animeData} /> : "Loading............"
                }
            </div>
            <br /><br />
            <h2>Popular</h2>
            <div style={sliderStyles}>
                {
                    isLoading === true ? <Popular data={animeData} /> : "Loading............"
                }
            </div>
            <h2>Action</h2>
            <div style={sliderStyles}>
                {
                    isLoading === true ? <Action data={animeData} /> : "Loading............"
                }

            </div>
            <h2>Most Watched</h2>
            <div style={sliderStyles}>
                {
                    isLoading === true ? <MostWatched data={animeData} /> : "Loading............"
                }
            </div>
        </div>
    );
}

export { Home }