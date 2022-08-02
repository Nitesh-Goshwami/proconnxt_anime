import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgMediaCard from "./Card"

const Action = ({ data }) => {
    const [action, setAction] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        filterAction()
    }, [isLoading])

    const filterAction = () => {
        const temp = data.filter((el) =>
            el.genres.some((e) => e.name === "Action"))
            .map(el => {
                return Object.assign({}, el, {
                    e: el.genres
                        .filter(e => e.name === "Action")
                });

            });
        setAction(temp);
        setIsLoading(true);
    }

    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            {
                isLoading && <Slider {...settings}>
                    <ImgMediaCard
                        uri={action[0].images.jpg.image_url}
                        heading={action[0].title}
                        rating={action[0].score}
                        episodes={action[0].episodes}
                    />
                    <ImgMediaCard
                        uri={action[1].images.jpg.image_url}
                        heading={action[1].title}
                        rating={action[1].score}
                        episodes={action[1].episodes}
                    />
                    <ImgMediaCard
                        uri={action[2].images.jpg.image_url}
                        heading={action[2].title}
                        rating={action[2].score}
                        episodes={action[2].episodes}
                    />
                    <ImgMediaCard
                        uri={action[3].images.jpg.image_url}
                        heading={action[3].title}
                        rating={action[3].score}
                        episodes={action[3].episodes}
                    />
                    <ImgMediaCard
                        uri={action[4].images.jpg.image_url}
                        heading={action[4].title}
                        rating={action[4].score}
                        episodes={action[4].episodes}
                    />
                    <ImgMediaCard
                        uri={action[5].images.jpg.image_url}
                        heading={action[5].title}
                        rating={action[5].score}
                        episodes={action[5].episodes}
                    />
                    <ImgMediaCard
                        uri={action[6].images.jpg.image_url}
                        heading={action[6].title}
                        rating={action[6].score}
                        episodes={action[6].episodes}
                    />
                    <ImgMediaCard
                        uri={action[7].images.jpg.image_url}
                        heading={action[7].title}
                        rating={action[7].score}
                        episodes={action[7].episodes}
                    />
                    <ImgMediaCard
                        uri={action[8].images.jpg.image_url}
                        heading={action[8].title}
                        rating={action[8].score}
                        episodes={action[8].episodes}
                    />
                    <ImgMediaCard
                        uri={action[9].images.jpg.image_url}
                        heading={action[9].title}
                        rating={action[9].score}
                        episodes={action[9].episodes}
                    />
                    <ImgMediaCard
                        uri={action[10].images.jpg.image_url}
                        heading={action[10].title}
                        rating={action[10].score}
                        episodes={action[10].episodes}
                    />
                    <ImgMediaCard
                        uri={action[11].images.jpg.image_url}
                        heading={action[11].title}
                        rating={action[11].score}
                        episodes={action[11].episodes}
                    />
                    <ImgMediaCard
                        uri={action[12].images.jpg.image_url}
                        heading={action[12].title}
                        rating={action[12].score}
                        episodes={action[12].episodes}
                    />
                    <ImgMediaCard
                        uri={action[13].images.jpg.image_url}
                        heading={action[13].title}
                        rating={action[13].score}
                        episodes={action[13].episodes}
                    />
                    <ImgMediaCard
                        uri={action[14].images.jpg.image_url}
                        heading={action[14].title}
                        rating={action[14].score}
                        episodes={action[14].episodes}
                    />
                </Slider>
            }

        </div>
    );
}



export { Action }