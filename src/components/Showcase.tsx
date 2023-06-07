import { useRef, useState } from "react"
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
    const scroller = useRef<HTMLDivElement>(null)
    const showcase = useRef<HTMLDivElement>(null)
    const [mousedown_location, set_mousedown_location] = useState(0)
    const [mouse_is_down, set_mouse_is_down] = useState(false)

    function setMouseLocation(event: React.MouseEvent) {
        if (isTrending) {
            const clientX = event.clientX
            set_mousedown_location(clientX)

            scroller.current?.classList.add('grabbable')
            set_mouse_is_down(true)
        }
    }

    function resetsetMouseLocation() {
        if (isTrending) {
            scroller.current?.classList.remove('grabbable')
            set_mouse_is_down(false)
            
        }
    }

    function handleMouseMove(event: React.MouseEvent) {
        if(!mouse_is_down) return
        const clientX = event.clientX
        const offset = mousedown_location - clientX

            if (scroller.current) {
                scroller.current.scrollLeft += (offset * 0.8)
                set_mousedown_location(clientX)
            }
        
    }

    return (
        <>
            <section
                className="grid-wrapper"
                ref={scroller}
                onMouseDown={event => setMouseLocation(event)}
                onMouseUp={resetsetMouseLocation}
                onMouseLeave={resetsetMouseLocation}
                onMouseMove={handleMouseMove}
            >
                <h2 data-margin="true">{header}</h2>
                <div
                    className="showcase"
                    data-trending={isTrending}
                    ref={showcase}
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
                                        <Picture
                                            thumbnail={thumbnail}
                                            isTrending={isTrending}
                                        />
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
