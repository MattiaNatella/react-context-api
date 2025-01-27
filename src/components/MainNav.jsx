import { Link, NavLink } from "react-router-dom"

const MainNav = () => {
    return (
        <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">HomePage</NavLink></li>
            <li>
                <NavLink className="nav-link" aria-current="page" to="/lista-posts">Posts</NavLink>
            </li>
        </ul>
    )
}

export default MainNav