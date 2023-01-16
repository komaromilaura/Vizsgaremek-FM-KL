import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sideMenu } from "../../Utils/data";
import style from "./Style/Sidebar.module.scss"
import useAuthContext from "../Context/AuthContext";

function Sidebar(props) {
    const { user } = useAuthContext();
        
    return(
        
        <Nav className={`d-flex flex-column ${style.sidebar}`}>
            <div className={style.background}></div>
            <div className={style.sidebarMenu}>
                {user && sideMenu.map((item) => {
                    return(
                        <Nav.Item className={style.navItem} key={item.link}>
                            <Link to={item.link} className={style.navItemLink}>
                                {item.name}
                            </Link>
                        </Nav.Item>
                    )
                })}
            </div>
        </Nav>
        
    );
}

export default Sidebar;