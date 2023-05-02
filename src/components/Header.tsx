function Header() {
    return (
        <header>
            <img src="/assets/logo.svg" alt="" className="logo"/>
            <nav>
                
                    <a href="#" >
                        <img
                            src="/assets/icon-nav-home.svg"
                            alt="home page"
                        />
                    </a>
                
                
                    <a href="#" >
                        <img
                            src="/assets/icon-nav-movies.svg"
                            alt="movies page"
                        />
                    </a>
                
                
                    <a href="#" >
                        <img
                            src="/assets/icon-nav-tv-series.svg"
                            alt="tv series page"
                        />
                    </a>
                
                
                    <a href="#">
                        <img
                            src="/assets/icon-nav-bookmark.svg"
                            alt="bookmarked page"
                        />
                    </a>
                
            </nav>
            <div className="avatar-container">
                <img src="/assets/image-avatar.png" alt="" className="avatar"/>
            </div>
        </header>
    )
}

export default Header
