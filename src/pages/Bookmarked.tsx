import SearchBar from "../components/SearchBar"
import Showcase, { MediaDetails } from "../components/Showcase"

interface BookmarkedProps {
    label: string
    media_array: MediaDetails[]
    toggleBookmarked: (title: string) => void
}

function Bookmarked({ label, media_array, toggleBookmarked }: BookmarkedProps) {
    return (
        <main>
            <SearchBar label={label} />
            <Showcase
                media_array={media_array.filter(
                    media => media.category === "Movie"
                )}
                toggleBookmarked={toggleBookmarked}
                header="Bookmarked Movies"
            />
            <Showcase
                media_array={media_array.filter(
                    media => media.category === "TV Series"
                )}
                toggleBookmarked={toggleBookmarked}
                header="Bookmarked TV Series"
            />
        </main>
    )
}

export default Bookmarked
