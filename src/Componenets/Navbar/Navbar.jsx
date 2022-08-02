import styled from "styled-components";
import { device } from "../../device";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountMenu from "../login/AcountMenu";
import AutoSuggestion from "./AutoSuggestions";


const Nav = styled.nav`
    display: grid;
    padding-top: 1%;
    grid-template-columns: 1fr 1fr 1fr;
    width: 85%;
    margin: auto;
    position:"sticky";
    font-family: "Quattrocento", serif;
    @media ${device.mobileS} {
    grid-template-columns: 1fr 1fr;
    }
    @media ${device.mobileM} {
        grid-template-columns: 1fr 1fr;
    }
    @media ${device.mobileL} {
        grid-template-columns: 1fr 1fr;
    }
    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
        background-color: #ffffff;
    }
`


const LocationCont = styled.div`
    height: 100%;
    background-color: #ffffff;
    text-align: center;
    line-height: 3;
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.mobileM} {
        display: none;
    }
    @media ${device.mobileL} {
        display: none;
    }
    @media ${device.tablet} {
        background-color: #ffffff;
        display: block;
    }
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin-right: 5%;
    font-weight: normal;
    &:hover {
        color:blue
        /* background-repeat: repeat;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: "Quattrocento", serif;
        -webkit-font-smoothing: antialiased; */
    }
`;

const SerachBoxandCartCont = styled.div`
    height: 100%;
    background-color: #ffffff;
    text-align: right;
    line-height: 3;
`;

const Logo = styled.img`
    width: 100%;
    margin-left: 5%;
    margin-top: 1%;
`;
const Navbar = () => {
    const navigate = useNavigate();
    // const { isAuthenticated, loginWithRedirect } = useAuth0();
    const [searchbarstae, setsearchbarState] = useState(false);

    function Mangev() {
        return setsearchbarState(!searchbarstae);
    }
    return <>
        <Nav>
            <Box width={{ xs: "30%", sm: "25%", md: "25%", lg: "25%", xl: "35%" }}>
                <Logo
                    src="https://www.proconnxt.com/img/logo1.jpg"
                    alt="logo"
                    sx={{ cursor: "pointer", }}
                    onClick={() => {
                        navigate("/")
                    }}
                >
                </Logo>
            </Box>
            <LocationCont>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/Movies">Movies</StyledLink>
                <StyledLink to="/WatchList">Watch List</StyledLink>
                <StyledLink to="/Contact">Contact</StyledLink>
            </LocationCont>
            <SerachBoxandCartCont>
                <Box width={{ xs: "20ch", sm: "25ch", lg: "40ch" }}>
                    <AutoSuggestion
                        styles={searchbarstae ? "block" : "none"}
                        event={Mangev}
                    />
                    {/* <AutoSuggestion/> */}
                </Box>

                {!searchbarstae ? (
                    <Tooltip title="Search">
                        <SearchIcon
                            sx={{
                                mr: 1,
                                color: "rgb(189,189,189)",
                                cursor: "pointer",
                            }}
                            onClick={(e) => {
                                setsearchbarState(!searchbarstae);
                            }}
                        />
                    </Tooltip>
                ) : (
                    ""
                )}

                <AccountMenu />
            </SerachBoxandCartCont>

        </Nav>
    </>
}

export { Navbar }