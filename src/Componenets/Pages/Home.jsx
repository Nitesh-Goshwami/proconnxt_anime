import ImageSlider from "./ImageSlider";
import axios from "axios"
import { useEffect, useState } from "react";
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
            {/* {isLoading && animeData.map((item, index) => {
                return <>
                    <div>{item.images.jpg.image_url}</div>
                </>
            })} */}
        </div>
    );
}

export { Home }