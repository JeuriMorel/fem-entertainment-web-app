import SearchBar from "../components/SearchBar"
import Showcase, { MediaDetails } from "../components/Showcase"

interface BookmarkedProps {
    label: string
    media_array: MediaDetails[]
    toggleBookmarked: (title: string) => void
    input_value: string
    filterList: (event: React.FormEvent<Element>) => void
    show_results: boolean
}

function Bookmarked({
    label,
    media_array,
    toggleBookmarked,
    input_value,
    filterList,
    show_results,
}: BookmarkedProps) {
    const search_results = media_array.filter(media =>
        media.title.toLowerCase().includes(input_value.toLowerCase())
    )

    const movies_search_results = search_results.filter(
        media => media.category === "Movie"
    )
    const tv_search_results = search_results.filter(
        media => media.category === "TV Series"
    )
    const movies_results_length = movies_search_results.length
    const tv_results_length = tv_search_results.length
    return (
        <main>
            <SearchBar label={label} onSubmitFunc={filterList} />
            {show_results ? (
                <>
                    <Showcase
                        media_array={movies_search_results}
                        toggleBookmarked={toggleBookmarked}
                        header={`Found ${movies_results_length} ${
                            movies_results_length === 1 ? "result" : "results"
                        } for "${input_value}" in movies`}
                    />
                    <Showcase
                        media_array={tv_search_results}
                        toggleBookmarked={toggleBookmarked}
                        header={`Found ${tv_results_length} ${
                            tv_results_length === 1 ? "result" : "results"
                        } for "${input_value}" in TV series`}
                    />
                </>
            ) : (
                <>
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
                </>
            )}
        </main>
    )
}

export default Bookmarked
