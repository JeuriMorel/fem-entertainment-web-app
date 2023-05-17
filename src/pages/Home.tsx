import SearchBar from "../components/SearchBar"
import Showcase, { MediaDetails } from "../components/Showcase"

interface HomeProps {
    label: string
    media_array: MediaDetails[]
    toggleBookmarked: (title: string) => void
    input_value: string
    filterList: (event: React.FormEvent<Element>) => void
}

function Home({ label, media_array, toggleBookmarked, input_value, filterList }: HomeProps) {
    const filtered_array = media_array.filter(media => {
        if (input_value === "") return true
        return media.title.toLowerCase().includes(input_value.toLowerCase())
    })

    

    return (
        <main>
            <SearchBar label={label} onChangeFunc={ filterList} />
            <Showcase
                media_array={filtered_array}
                toggleBookmarked={toggleBookmarked}
                header="Recommended for you"
            />
        </main>
    )
}

export default Home
