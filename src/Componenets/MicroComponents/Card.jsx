import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
const StyledCard = styled(Card)``;

export default function ImgMediaCard(props) {
    const { uri, heading, rating, episodes, description } = props;
    return (
        <StyledCard sx={{ maxWidth: 345, margin: "2%" }}>
            <CardMedia component="img" alt="green iguana" height="150" image={uri} />
            <CardContent style = {{textAlign:"left"}}>
                <Typography style = {{fontSize:"14px"}} gutterBottom variant="h6" component="div">
                    Title: {heading}
                </Typography>
                <Typography gutterBottom variant="small" component="div">
                    Rating: {rating}
                </Typography>
                <Typography gutterBottom variant="span" component="div">
                    Episodes: {episodes}
                </Typography>
                <Typography style={{ overflow: "hidden" }} variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Explore Now</Button>
            </CardActions>
        </StyledCard>
    );
}