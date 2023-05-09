import { icons } from "../svgs/icons"

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
    toggleBookmarked: (title: string)=> void
}

function Showcase({ media_array, toggleBookmarked }: ShowcaseProps) {
    return (
        <>
            <h2 data-margin="true">Recommended for you</h2>
            <section className="showcase">
                {media_array.map(
                    ({
                        title,
                        thumbnail,
                        year,
                        category,
                        rating,
                        isBookmarked,
                    }) => {
                        const icon_type = category == "Movie" ? "movie" : "tv"
                        return (
                            <div className="card">
                                <button className="bookmark-icon-container flex-center" aria-label="toggle bookmarked status" onClick={() => toggleBookmarked(title)}>
                                    {isBookmarked
                                        ? icons.bookmark.full
                                        : icons.bookmark.empty}
                                </button>
                                <div className="img-container">
                                    <picture>
                                        <source
                                            media="(min-width: 1400px)"
                                            srcSet={thumbnail.regular.large}
                                        />
                                        <source
                                            media="(min-width: 768px)"
                                            srcSet={thumbnail.regular.medium}
                                        />
                                        <img
                                            src={thumbnail.regular.small}
                                            alt=""
                                        />
                                    </picture>
                                </div>
                                <div className="media-info-container">
                                    <p>
                                        <span>{year}</span>
                                        <span>&#183;</span>
                                        <span className="card-icon-container">{icons.category[icon_type]}</span>
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
            </section>
        </>
    )
}

export default Showcase
