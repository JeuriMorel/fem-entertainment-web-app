import { PageProps } from "../App"
import SearchBar from "../components/SearchBar"
import Showcase from "../components/Showcase"


function Bookmarked({
    label,
    media_array,
    toggleBookmarked,
    input_value,
    filterList,
    show_results,
    set_input_value,set_show_results
}: PageProps) {
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
            <h1 className="sr-only">Entertainment web app - Bookmarked Page</h1>
            <SearchBar label={label} onSubmitFunc={filterList} set_input_value={ set_input_value} set_show_results={set_show_results }/>
            {show_results ? (
                <>
                    <Showcase
                        media_array={movies_search_results}
                        toggleBookmarked={toggleBookmarked}
                        header={`Found ${movies_results_length} ${
                            movies_results_length === 1 ? "result" : "results"
                        } for '${input_value}' in movies`}
                    />
                    <Showcase
                        media_array={tv_search_results}
                        toggleBookmarked={toggleBookmarked}
                        header={`Found ${tv_results_length} ${
                            tv_results_length === 1 ? "result" : "results"
                        } for '${input_value}' in TV series`}
                    />
                </>
            ) : (
                <>
                    <Showcase
                        media_array={media_array.filter(
                            media => media.category === "Movie"
                        )}
                            toggleBookmarked={toggleBookmarked}
                            isMainShowcase={true}
                        header="Bookmarked Movies"
                    />
                    <Showcase
                        media_array={media_array.filter(
                            media => media.category === "TV Series"
                        )}
                            toggleBookmarked={toggleBookmarked}
                            isMainShowcase={true}
                        header="Bookmarked TV Series"
                    />
                </>
            )}
        </main>
    )
}

export default Bookmarked
