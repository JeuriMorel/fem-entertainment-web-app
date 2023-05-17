import SearchBar from "../components/SearchBar"
import Showcase, { MediaDetails } from "../components/Showcase"

interface SeriesProps {
    label: string
    media_array: MediaDetails[]
    toggleBookmarked: (title: string) => void
}

function Series({ label, media_array, toggleBookmarked }: SeriesProps) {
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

export default Series