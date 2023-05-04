import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

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
            </main>
        </>
    )
}

export default App
