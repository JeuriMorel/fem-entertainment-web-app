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
        Home = "movies or TV series",
        Movies = "movies",
        Series = "TV Series",
        Bookmarked = "bookmarked shows",
    }

    const [media_array, set_media] = useState<MediaDetails[]>(data)

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
                        />
                    }
                ></Route>
                <Route
                    path="/bookmarked"
                    element={
                        <Bookmarked
                            label={SearchLabel.Bookmarked}
                            toggleBookmarked={toggleBookmarked}
                            media_array={media_array.filter(media=> media.isBookmarked == true)}
                        />
                    }
                ></Route>
            </Routes>
        </>
    )
}

export default App
