import { icons } from "../svgs/icons"

interface SearchBarProps {
    label: string
    onSubmitFunc: (event: any) => void
}

function SearchBar({ label,onSubmitFunc }: SearchBarProps) {
    return (
        <form onSubmit={(e)=> onSubmitFunc(e)}>
            <div className="search-icon-wrapper">{icons.search}</div>
            <input type="search" name="search" id="search" placeholder=" " />
            <label htmlFor="search">Search for {label}</label>
        </form>
    )
}

export default SearchBar
