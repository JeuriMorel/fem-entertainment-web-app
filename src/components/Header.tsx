import { Link } from "react-router-dom"
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
                        <Link to="/" aria-label="home page"
                            title="home page"
                            role="link" aria-disabled="true">{icons.nav.home}</Link>
                    </li>
                    <li>
                        <Link to="/movies" aria-label="movies page" title="movies page">
                            {icons.nav.movies}
                        </Link>
                    </li>
                    <li>
                        <Link to="/series" aria-label="tv series page" title="tv series page">
                            {icons.nav.tv_series}
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookmarked" aria-label="bookmarked page" title="bookmark page">
                            {icons.nav.bookmark}
                        </Link>
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
