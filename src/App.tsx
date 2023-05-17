import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Showcase, { MediaDetails } from "./components/Showcase"
import data from "./data.json"
import { useState } from "react"

function App() {
    enum SearchLabel {
        Home = "movies or TV series",
        Movies = "movies",
        Series = "TV Series",
        Bookmarked = "bookmarked shows",
    }

    const [media_array, set_media] = useState<MediaDetails[]>(data)

    function toggleBookmarked(title: string) {
        set_media(media_array => {
            media_array.forEach(media => {
                if (media.title == title) {media.isBookmarked = !media.isBookmarked
                }
            })
            return [...media_array]
        })
    }

    return (
        <>
            <Header />
            <main>
                <SearchBar label={SearchLabel.Home} />
                <Showcase media_array={media_array} toggleBookmarked={ toggleBookmarked} />
            </main>
        </>
    )
}

export default App
