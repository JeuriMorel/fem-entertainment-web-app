import { Routes, Route } from "react-router-dom"
import { MediaDetails } from "./components/Showcase"
import data from "./data.json"
import { useState } from "react"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Header from "./components/Header"
import Series from "./pages/Series"
import Bookmarked from "./pages/Bookmarked"

function App() {
    enum SearchLabel {
        Home = "Movies or TV Series",
        Movies = "Movies",
        Series = "TV Series",
        Bookmarked = "bookmarked Movies and TV Series",
    }

    const [media_array, set_media] = useState<MediaDetails[]>(data)

    const [input_value, set_input_value] = useState("");

    function filterList(event: React.FormEvent) {
        const  target  = event.target as HTMLInputElement
        set_input_value(target.value)
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
                        />
                    }
                ></Route>
                <Route
                    path="/movies"
                    element={
                        <Movies
                            label={SearchLabel.Movies}
                            toggleBookmarked={toggleBookmarked}
                            media_array={media_array.filter(media => media.category === "Movie")}
                            input_value={input_value}
                            filterList={filterList}
                        />
                    }
                ></Route>
                <Route
                    path="/series"
                    element={
                        <Series
                            label={SearchLabel.Series}
                            toggleBookmarked={toggleBookmarked}
                            media_array={media_array.filter(media => media.category === "TV Series")}
                            input_value={input_value}
                            filterList={filterList}
                        />
                    }
                ></Route>
                <Route
                    path="/bookmarked"
                    element={
                        <Bookmarked
                            label={SearchLabel.Bookmarked}
                            toggleBookmarked={toggleBookmarked}
                            media_array={media_array.filter(media => media.isBookmarked == true)}
                            input_value={input_value}
                            filterList={filterList}
                        />
                    }
                ></Route>
            </Routes>
        </>
    )
}

export default App
