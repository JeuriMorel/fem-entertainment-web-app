interface PictureProps {
    thumbnail: {
        trending?: { small: string; large: string } | undefined
        regular: { small: string; medium: string; large: string }
    }
    isTrending: Boolean
}
function Picture({ thumbnail, isTrending }: PictureProps) {
    return isTrending ? (
        <picture>
            <source
                media="(min-width: 768px)"
                srcSet={thumbnail.trending?.large}
            />
            <img src={thumbnail.trending?.small} alt="" draggable={false} />
        </picture>
    ) : (
        <picture>
            <source
                media="(min-width: 1400px)"
                srcSet={thumbnail.regular.large}
            />
            <source
                media="(min-width: 768px)"
                srcSet={thumbnail.regular.medium}
            />
            <img src={thumbnail.regular.small} alt="" draggable={false} />
        </picture>
    )
}

export default Picture
