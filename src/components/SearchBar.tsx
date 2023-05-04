import { icons } from "../svgs/icons"


interface SearchBarProps {
    label: string
}

function SearchBar({ label }: SearchBarProps) {
    return (
        <form>
            {icons.search}
            <input type="search" name="search" id="search" placeholder=" " />
            <label htmlFor="search">Search for {label}</label>
        </form>
    )
}

export default SearchBar
