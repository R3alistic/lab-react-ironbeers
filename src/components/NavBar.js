import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi"
import { IconContext } from "react-icons";



function Navbar() {
    return (
        <div style={{ backgroundColor: "#3DC4FC"}}>
            <NavLink to="/">
                <IconContext.Provider value={{ color:"white", size: "5em"}}>
                    <div>
                        <HiHome />
                    </div>
                </IconContext.Provider>
            </NavLink>
        </div>
    )
}

export default Navbar;