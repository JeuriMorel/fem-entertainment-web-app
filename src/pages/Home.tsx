import SearchBar from "../components/SearchBar"
import Showcase, { MediaDetails } from "../components/Showcase"

interface HomeProps {
    label: string
    media_array: MediaDetails[]
    toggleBookmarked: (title: string) => void
    input_value: string
    filterList: (event: React.FormEvent<Element>) => void
    show_results: boolean
}

function Home({
    label,
    media_array,
    toggleBookmarked,
    input_value,
    filterList,
    show_results,
}: HomeProps) {
    const search_results = media_array.filter(media => media.title.toLowerCase().includes(input_value.toLowerCase()))
    const search_results_length = search_results.length
    return (
        <main>
            <SearchBar label={label} onSubmitFunc={filterList} />
            {show_results ? (
                <Showcase
                    media_array={search_results}
                    toggleBookmarked={toggleBookmarked}
                    header= {`Found ${search_results_length} ${search_results_length === 1 ? 'result' : "results"} for "${input_value}"`}
                />
            ) : (
                <>
                    <Showcase
                        media_array={media_array.filter(
                            media => media.isTrending
                        )}
                        toggleBookmarked={toggleBookmarked}
                        isTrending={true}
                        header="Trending"
                    />
                    <Showcase
                        media_array={media_array.filter(
                            media => !media.isTrending
                        )}
                        toggleBookmarked={toggleBookmarked}
                        header="Recommended for you"
                    />
                </>
            )}
        </main>
    )
}

export default Home
