import styled from "styled-components";
import { device } from "../../device";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Badge, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import AccountMenu from "../login/AcountMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Nav = styled.nav`
    display: grid;
    padding-top: 1%;
    grid-template-columns: 1fr 1fr 1fr;
    width: 85%;
    margin: auto;
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
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const [searchbarstae, setsearchbarState] = useState(false);
    // const cartqnty = useSelector((state) => state.cart.quantity);

    // function Mangev() {
    //     return setsearchbarState(!searchbarstae);
    //   }
    return <>
        <Nav>
            <Box width={{ xs: "30%", sm: "25%", md: "25%", lg: "25%", xl: "35%" }}>
                <Logo
                    src="https://github.com/Nitesh-Goshwami/Eshoppers/blob/master/public/Images/anime%20logo.png?raw=true"
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
                <StyledLink to="/About">About</StyledLink>
                <StyledLink to="/Movies">Movies</StyledLink>
                <StyledLink to="/Contact">Contact</StyledLink>
            </LocationCont>
            <SerachBoxandCartCont>
                <Box width={{ xs: "20ch", sm: "25ch", lg: "40ch" }}>
                     {/* <AutoSuggestion
                        styles={searchbarstae ? "block" : "none"}
                        event={Mangev}
                    /> */}
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

                {/* <Tooltip title="cart">
                    <Badge badgeContent={cartqnty} sx={{ mr: 1 }} color="primary">
                        <ShoppingCartIcon
                            onClick={(e) => {
                                if (!isAuthenticated) loginWithRedirect();
                                navigate("/cart");
                            }}
                            sx={{
                                mr: 1,
                                mb: 1.9,
                                color: "rgb(189,189,189)",
                                cursor: "pointer",
                            }}
                        />
                    </Badge>
                </Tooltip> */}

                <AccountMenu />
            </SerachBoxandCartCont>

        </Nav>
    </>
}

export { Navbar }