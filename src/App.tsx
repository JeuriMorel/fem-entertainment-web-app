import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Showcase from "./components/Showcase"
import data from "./data.json"

function App() {
    enum SearchLabel {
        Home = "movies or TV series",
        Movies = "movies",
        Series = "TV Series",
        Bookmarked = "bookmarked shows",
    }

    return (
        <>
            <Header />
            <main>
                <SearchBar label={SearchLabel.Home} />
                <Showcase media={ data} />
            </main>
        </>
    )
}

export default App
