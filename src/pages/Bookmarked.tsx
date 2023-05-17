import SearchBar from "../components/SearchBar"
import Showcase, { MediaDetails } from "../components/Showcase"

interface BookmarkedProps {
    label: string
    media_array: MediaDetails[]
    toggleBookmarked: (title: string) => void
    input_value: string
    filterList: (event: React.FormEvent<Element>) => void
}

function Bookmarked({
    label,
    media_array,
    toggleBookmarked,
    input_value,
    filterList,
}: BookmarkedProps) {
    const filtered_array = media_array.filter(media => {
        if (input_value === "") return true
        return media.title.toLowerCase().includes(input_value.toLowerCase())
    })

    return (
        <main>
            <SearchBar label={label} onChangeFunc={filterList} />
            <Showcase
                media_array={filtered_array.filter(
                    media => media.category === "Movie"
                )}
                toggleBookmarked={toggleBookmarked}
                header="Bookmarked Movies"
            />
            <Showcase
                media_array={filtered_array.filter(
                    media => media.category === "TV Series"
                )}
                toggleBookmarked={toggleBookmarked}
                header="Bookmarked TV Series"
            />
        </main>
    )
}

export default Bookmarked
