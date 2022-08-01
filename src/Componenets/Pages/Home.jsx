import ImageSlider from "./ImageSlider";
import axios from "axios"
import { useEffect, useState } from "react";
import { Popular } from "../MicroComponents/Popular";
import Responsive, { Action } from "../MicroComponents/Action";
import { MostWatched } from "../MicroComponents/MostWatched";
const Home = () => {
    const [animeData, setAnimeData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        getData()
    }, [])
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
    return (
        <div>
            <div style={containerStyles}>
                {
                    isLoading === true ? <ImageSlider slides={animeData} /> : "Loading............"
                }
            </div>
            <br/>
            <h2>Popular</h2>
            <div >
                {
                    isLoading === true ? <Popular data={animeData} /> : "Loading............"
                }
            </div>
            <h2>Action</h2>
            <div>
                {
                    isLoading === true ? <Action data={animeData} /> : "Loading............"
                }
                {/* <Responsive /> */}
            </div>
            <h2>MostWatched</h2>
            <div>
                {
                    isLoading === true ? <MostWatched data={animeData} /> : "Loading............"
                }
            </div>
        </div>
    );
}

export { Home }