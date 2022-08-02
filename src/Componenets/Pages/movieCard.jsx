import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function MovieCard(prop) {
    const navigate = useNavigate();

    const {
        animeName,
        animeImg,
        animeDesc,
        whole,
        episodes,
        rating,
        genres
    } = prop,
        cardRef = React.useRef();
    React.useEffect(() => {
        gsap.from(cardRef.current, {
            opacity: 0.0,
            duration: 1.5,
            delay: 0.5,
        });
    }, []);

    const save = () => {
        let data = JSON.parse(localStorage.getItem("watchList") || "[]");
        data.push(whole);
        localStorage.setItem("watchList", JSON.stringify(data))
    }
    return (
        <Card
            sx={{ maxWidth: 345, mt: "2%", ml: "2%", mr: "2%", cursor: "pointer" }}
            onClick={(e) => {
                if (e.target.nodeName !== "BUTTON") {
                    navigate("/Movies/" + whole.mal_id);
                }
            }}
        >
            <CardMedia
                ref={cardRef}
                component="img"
                height="140"
                image={animeImg}
                alt="green iguana"
            />
            <CardContent style={{ textAlign: "left", display: "grid" }}>
                <Typography gutterBottom variant="h6" component="div">
                    Title: {animeName.trim().split(" ").splice(0, 1)}
                </Typography>
                <br />
                <Typography variant="small" component="small">
                    Episodes: {episodes}
                </Typography>
                <Typography variant="small" component="small">
                    Genres: {genres}
                </Typography>
                <Typography variant="small" component="small">
                    Rating: {rating}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Description: {animeDesc.split("").slice(0, 25).join("") + "..."}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ fontSize: "20px" }}
                >
                </Typography>
                <Rating readOnly name="half-rating" defaultValue={rating}></Rating>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    size="small"
                    onClick={save}
                >
                    watchlist
                </Button>
            </CardActions>
        </Card>
    );
}