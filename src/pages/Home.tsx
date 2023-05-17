import SearchBar from "../components/SearchBar"
import Showcase, { MediaDetails } from "../components/Showcase"

interface HomeProps {
    label: string
    media_array: MediaDetails[]
    toggleBookmarked: (title: string) => void
}

function Home({ label, media_array, toggleBookmarked }: HomeProps) {
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

export default Home
