import { PageProps } from "../App"
import SearchBar from "../components/SearchBar"
import Showcase from "../components/Showcase"

function Series({
    label,
    media_array,
    toggleBookmarked,
    input_value,
    filterList,
    show_results,
    set_input_value,
    set_show_results,
}: PageProps) {
    const search_results = media_array.filter(media =>
        media.title.toLowerCase().includes(input_value.toLowerCase())
    )
    const search_results_length = search_results.length
    return (
        <main>
            <h1 className="sr-only">Entertainment web app - Series Page</h1>
            <SearchBar
                label={label}
                onSubmitFunc={filterList}
                set_input_value={set_input_value}
                set_show_results={set_show_results}
            />
            {show_results ? (
                <Showcase
                    media_array={search_results}
                    toggleBookmarked={toggleBookmarked}
                    header={`Found ${search_results_length} ${
                        search_results_length === 1 ? "result" : "results"
                    } for '${input_value}'`}
                />
            ) : (
                <Showcase
                    media_array={media_array.filter(media => {
                        if (input_value === "") return true
                        return media.title
                            .toLowerCase()
                            .includes(input_value.toLowerCase())
                    })}
                    toggleBookmarked={toggleBookmarked}
                    isMainShowcase={true}
                    header={"TV Series"}
                />
            )}
        </main>
    )
}

export default Series
