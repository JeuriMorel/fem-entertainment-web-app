import {  NavLink } from "react-router-dom"
import { icons } from "../svgs/icons"

function Header() {
    return (
        <header>
            <div className="logo-wrapper flex-center" aria-hidden="true">
                {icons.logo}
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" aria-label="home page"
                            title="home page">{icons.nav.home}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" aria-label="movies page" title="movies page">
                            {icons.nav.movies}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/series" aria-label="tv series page" title="tv series page">
                            {icons.nav.tv_series}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bookmarked" aria-label="bookmarked page" title="bookmark page">
                            {icons.nav.bookmark}
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="avatar-container" aria-hidden="true">
                <img src="/assets/image-avatar.png" alt="" className="avatar" />
            </div>
        </header>
    )
}

export default Header
