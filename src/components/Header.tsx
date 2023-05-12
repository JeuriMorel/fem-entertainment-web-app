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
                        <a href="#" aria-label="home page" className="current"
                        title="home page">
                            {icons.nav.home}
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="movies page" title="movies page">
                            {icons.nav.movies}
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="tv series page" title="tv series page">
                            {icons.nav.tv_series}
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="bookmarked page" title="bookmark page">
                            {icons.nav.bookmark}
                        </a>
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
