import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export default function AutoSuggestion(props) {
    const { styles, event } = props;
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            await sleep(1e3); // For demo purposes.

            if (active) {
                setOptions([...topFilms]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            sx={{
                height: { xs: 10 },
                top: 4,
                mr: 9,
                display: styles,
            }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            isOptionEqualToValue={(option, value) => option.title === value.title}
            getOptionLabel={(option) => option.title}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    onBlur={(e) => {
                        event();
                    }}
                    {...params}
                    label="Search"
                    InputProps={{
                        ...params.InputProps,

                        endAdornment: (
                            <React.Fragment>
                                {loading ? (
                                    <CircularProgress color="inherit" size={20} />
                                ) : (
                                    <SearchIcon sx={{ mr: -3, color: "rgb(189,189,189)" }} />
                                )}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const topFilms = [
    {
        title: "Star Wars: Episode IV - A New Hope",
        year: 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
    { title: "Aquatic Plants", year: 1994 },
    { title: "Bulbs", year: 1972 },
    { title: "Bamboo", year: 1974 },
    { title: "Bougainvillea", year: 2008 },
    { title: "Climber Plants", year: 1957 },
    { title: "Hanging Plants", year: 1993 },
    { title: "Creeper Plants", year: 1994 },
    { title: "Croton Plants", year: 2003, },
    { title: "Gift Plants", year: 1966 },
    { title: "Grow Bags", year: 1999 },
    {
        title: "Pots",
        year: 2001,
    },
    {
        title: "Pinkish Red Rose", year: 1980,
    },
    { title: "Peace lily pot", year: 1994 },
    { title: "Pirandai Herbal plant", year: 2010 },
    {
        title: "Rosewood Tree",
        year: 2002,
    },
    { title: "Indian tulip tree", year: 1975 },
    { title: "Silver Oak Plant", year: 1990 },
    { title: "Hibiscus Pink Plant", year: 1999 },
    { title: "Seven Samurai", year: 1954 },

];