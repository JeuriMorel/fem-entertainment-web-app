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
                media_array={media_array}
                toggleBookmarked={toggleBookmarked}
            />
        </main>
    )
}

export default Bookmarked