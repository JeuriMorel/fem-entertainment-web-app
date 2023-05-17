import { icons } from "../svgs/icons"

interface SearchBarProps {
    label: string
    onChangeFunc: (event: any) => void
}

function SearchBar({ label,onChangeFunc }: SearchBarProps) {
    return (
        <form>
            <div className="search-icon-wrapper">{icons.search}</div>
            <input type="search" name="search" id="search" placeholder=" " onChange={(e)=> onChangeFunc(e)}/>
            <label htmlFor="search">Search for {label}</label>
        </form>
    )
}

export default SearchBar
