import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Contact } from "../Pages/Contact";
import { WatchList } from "../Pages/WatchList";
import { Movies } from "../Pages/Movies";
import { AnimeDetail } from "../Pages/AnimeDetails";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginRedirect } from "../../Utils/LoginRedirect";
const Routers = () => {
    const { isAuthenticated } = useAuth0();
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Contact" element={<Contact />}></Route>
            {/* <Route path="/WatchList" element={<WatchList />}></Route> */}
            <Route path="/Movies" element={<Movies />}></Route>
            <Route path="/Movies/:id" element={<AnimeDetail />}></Route>

            <Route
                path="/WatchList"
                element={
                    isAuthenticated ? <WatchList /> : <LoginRedirect></LoginRedirect>
                }
            ></Route>
        </Routes>
    </>
}


export { Routers }