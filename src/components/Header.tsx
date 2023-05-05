import { icons } from "../svgs/icons"

function Header() {
    return (
        <header>
            <div className="logo-wrapper flex-center" aria-hidden="true">
                {icons.logo}
            </div>
            <nav>
                <a href="#" aria-label="home page" className="current">
                    {icons.nav.home}
                </a>

                <a href="#" aria-label="movies page">
                    {icons.nav.movies}
                </a>

                <a href="#" aria-label="tv series page">
                    {icons.nav.tv_series}
                </a>

                <a href="#" aria-label="bookmarked page">
                    {icons.nav.bookmark}
                </a>
            </nav>
            <div className="avatar-container" aria-hidden="true">
                <img src="/assets/image-avatar.png" alt="" className="avatar" />
            </div>
        </header>
    )
}

export default Header
