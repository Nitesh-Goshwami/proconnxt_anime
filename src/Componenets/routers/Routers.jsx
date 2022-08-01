import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Contact } from "../Pages/Contact";
import { About } from "../Pages/About";
import { Movies } from "../Pages/Movies";
const Routers = () => {

    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Movies" element={<Movies />}></Route>
        </Routes>
    </>
}


export { Routers }