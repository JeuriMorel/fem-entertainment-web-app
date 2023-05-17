import SearchBar from "../components/SearchBar"
import Showcase, { MediaDetails } from "../components/Showcase"

interface SeriesProps {
    label: string
    media_array: MediaDetails[]
    toggleBookmarked: (title: string) => void
    input_value: string
    filterList: (event: React.FormEvent<Element>) => void
}

function Series({ label, media_array, toggleBookmarked, input_value, filterList }: SeriesProps) {
    const filtered_array = media_array.filter(media => {
        if (input_value === "") return true
        return media.title.toLowerCase().includes(input_value.toLowerCase())
    })
    return (
        <main>
            <SearchBar label={label} onChangeFunc={filterList} />
            <Showcase
                media_array={filtered_array.filter(media => {
                    if (input_value === "") return true
                    return media.title.toLowerCase().includes(input_value.toLowerCase())
                })}
                toggleBookmarked={toggleBookmarked}
                header={"TV Series"}
            />
        </main>
    )
}

export default Series