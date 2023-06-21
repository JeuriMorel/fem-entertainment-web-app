import { Routes, Route } from "react-router-dom"
import { MediaDetails } from "./components/Showcase"
import data from "./data.json"
import { useState } from "react"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Header from "./components/Header"
import Series from "./pages/Series"
import Bookmarked from "./pages/Bookmarked"

export interface PageProps {
    label: string
    media_array: MediaDetails[]
    toggleBookmarked: (title: string) => void
    input_value: string
    filterList: (event: React.FormEvent<Element>) => void
    show_results: boolean
    set_input_value: React.Dispatch<React.SetStateAction<string>>
    set_show_results: React.Dispatch<React.SetStateAction<boolean>>
}

function App() {
    enum SearchLabel {
        Home = "movies or TV Series",
        Movies = "movies",
        Series = "TV Series",
        Bookmarked = "bookmarked shows",
    }

    const [media_array, set_media] = useState<MediaDetails[]>(data)

    const [input_value, set_input_value] = useState("")
    const [show_results, set_show_results] = useState(false)

    function filterList(event: React.FormEvent) {
        event.preventDefault()
        const target = event.target as HTMLFormElement
        const form_data = new FormData(target)
        const search_value = form_data.get("search")
        if (typeof search_value === "string") {
            set_show_results(search_value.length > 0)
        }

        set_input_value(search_value as string)
    }

    function toggleBookmarked(title: string) {
        set_media(media_array => {
            media_array.forEach(media => {
                if (media.title == title) {
                    media.isBookmarked = !media.isBookmarked
                }
            })
            return [...media_array]
        })
    }

    return (
        <>
            <Header />
            <h1 className="sr-only">Entertainment web app</h1>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            label={SearchLabel.Home}
                            toggleBookmarked={toggleBookmarked}
                            media_array={media_array}
                            input_value={input_value}
                            filterList={filterList}
                            show_results={show_results}
                            set_input_value={set_input_value}
                            set_show_results={set_show_results}
                        />
                    }
                ></Route>
                <Route
                    path="/movies"
                    element={
                        <Movies
                            label={SearchLabel.Movies}
                            toggleBookmarked={toggleBookmarked}
                            media_array={media_array.filter(
                                media => media.category === "Movie"
                            )}
                            input_value={input_value}
                            filterList={filterList}
                            show_results={show_results}
                            set_input_value={set_input_value}
                            set_show_results={set_show_results}
                        />
                    }
                ></Route>
                <Route
                    path="/series"
                    element={
                        <Series
                            label={SearchLabel.Series}
                            toggleBookmarked={toggleBookmarked}
                            media_array={media_array.filter(
                                media => media.category === "TV Series"
                            )}
                            input_value={input_value}
                            filterList={filterList}
                            show_results={show_results}
                            set_input_value={set_input_value}
                            set_show_results={set_show_results}
                        />
                    }
                ></Route>
                <Route
                    path="/bookmarked"
                    element={
                        <Bookmarked
                            label={SearchLabel.Bookmarked}
                            toggleBookmarked={toggleBookmarked}
                            media_array={media_array.filter(
                                media => media.isBookmarked
                            )}
                            input_value={input_value}
                            filterList={filterList}
                            show_results={show_results}
                            set_input_value={set_input_value}
                            set_show_results={set_show_results}
                        />
                    }
                ></Route>
            </Routes>
        </>
    )
}

export default App
