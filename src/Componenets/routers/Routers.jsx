import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Contact } from "../Pages/Contact";
import { WatchList } from "../Pages/WatchList";
import { Movies } from "../Pages/Movies";
import { AnimeDetail } from "../Pages/AnimeDetails";

const Routers = () => {

    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/WatchList" element={<WatchList />}></Route>
            <Route path="/Movies" element={<Movies />}></Route>
            <Route path="/Movies/:id" element={<AnimeDetail />}></Route>
        </Routes>
    </>
}


export { Routers }