import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function AccountMenu() {
    const { loginWithRedirect, isAuthenticated, isLoading, logout, user } = useAuth0();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Box component="span">
                <Tooltip title="Account">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        {isAuthenticated ? <Avatar
                            sx={{
                                width: 33,
                                height: 33,
                            }}
                        > <img style={{ width: "25px", height:"25px", radius:"12.5px" }} src={user.picture} alt={user.name} /></Avatar> :
                            <Avatar
                                sx={{
                                    width: 22,
                                    height: 22,
                                    colour: "rgb(38, 145, 244)",
                                }}
                            ></Avatar>}
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.30))",
                        mt: 0.5,
                        width: { xs: "200px", lg: "170px" },
                        paddingLeft: "10px",
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                {isAuthenticated && !isLoading ? (
                    <MenuItem
                        onClick={(e) => {
                            navigate("/Profile");
                        }}
                    >
                        <Avatar /> My Profile
                    </MenuItem>
                ) : (
                    ""
                )}
                {!isAuthenticated && !isLoading ? (
                    <MenuItem
                        onClick={(e) => {
                            loginWithRedirect();
                        }}
                    >
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Register Now
                    </MenuItem>
                ) : (
                    ""
                )}
                {isAuthenticated ? (
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                ) : (
                    ""
                )}
                <MenuItem
                    onClick={(e) => {
                        if (isAuthenticated && !isLoading) {
                            logout({ returnTo: window.location.origin });
                        } else {
                            loginWithRedirect();
                        }
                    }}
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    {isAuthenticated && !isLoading ? "Logout" : "Login"}
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}