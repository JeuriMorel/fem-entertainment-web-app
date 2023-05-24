import { icons } from "../svgs/icons"
import Picture from "./Picture"

export type MediaDetails = {
    title: string
    thumbnail: {
        trending?: { small: string; large: string }
        regular: { small: string; medium: string; large: string }
    }
    year: number
    category: string
    rating: string
    isBookmarked: boolean
    isTrending: boolean
}

interface ShowcaseProps {
    media_array: MediaDetails[]
    toggleBookmarked: (title: string) => void
    header: string
    isTrending?: Boolean
}

function Showcase({
    media_array,
    toggleBookmarked,
    header,
    isTrending = false,
}: ShowcaseProps) {
    
    return (
        <>
            <section className="grid-wrapper">
                <h2 data-margin="true">{header}</h2>
                <div
                    className="showcase"
                    data-trending={isTrending}
                >
                    {media_array.map(
                        ({
                            title,
                            thumbnail,
                            year,
                            category,
                            rating,
                            isBookmarked,
                        }) => {
                            const icon_type =
                                category == "Movie" ? "movie" : "tv"
                            return (
                                <div className="card" key={title}>
                                    <button
                                        className="bookmark-icon-container flex-center"
                                        aria-label="toggle bookmarked status"
                                        onClick={() => {
                                            toggleBookmarked(title)
                                        }}
                                    >
                                        {isBookmarked
                                            ? icons.bookmark.full
                                            : icons.bookmark.empty}
                                    </button>
                                    <div className="img-container">
                                        <Picture thumbnail={thumbnail} isTrending={isTrending} />
                                        <button className="play-button flex-center">
                                            <span className="play-btn-icon-container">
                                                {icons.play}
                                            </span>
                                            <span className="text">Play</span>
                                        </button>
                                    </div>
                                    <div className="media-info-container">
                                        <p>
                                            <span>{year}</span>
                                            <span>&#183;</span>
                                            <span className="card-icon-container">
                                                {icons.category[icon_type]}
                                            </span>
                                            <span>{category}</span>
                                            <span>&#183;</span>
                                            <span>{rating}</span>
                                        </p>
                                        <h3 data-weight="medium">{title}</h3>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </section>
        </>
    )
}

export default Showcase
