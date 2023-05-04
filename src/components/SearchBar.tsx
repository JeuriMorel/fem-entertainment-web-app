interface SearchBarProps {
    label: string
}

function SearchBar({ label }: SearchBarProps) {
    return (
        <form>
            <img src="/assets/icon-search.svg" alt="submit search" />
            <input type="search" name="search" id="search" placeholder=" " />
            <label htmlFor="search">Search for {label}</label>
        </form>
    )
}

export default SearchBar
