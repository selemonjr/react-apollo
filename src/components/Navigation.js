
import {Link} from "react-router-dom";
const Navigation = () => {
    return (
        <div>
            <nav>
                <div className="nav_logo"><Link to="/"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EOMP0V69RZ5xChG5pRoFyAHaCl%26pid%3DApi%26h%3D160&f=1" alt=""/></Link></div>
                <div className="nav_logo"><Link to="/search"><i class='bx bx-search'></i></Link></div>
                <div className="nav_logo">Link</div>
            </nav>
        </div>
    )
}
export default Navigation;