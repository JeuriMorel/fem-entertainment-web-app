import SearchBar from "../components/SearchBar"
import Showcase, { MediaDetails } from "../components/Showcase"

interface MoviesProps {
    label: string
    media_array: MediaDetails[]
    toggleBookmarked: (title: string) => void
}

function Movies({ label, media_array, toggleBookmarked }: MoviesProps) {
    return (
        <main>
            <SearchBar label={label} />
            <Showcase
                media_array={media_array}
                toggleBookmarked={toggleBookmarked}
                header="Movies"
            />
        </main>
    )
}

export default Movies
