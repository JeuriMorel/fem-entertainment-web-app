import { icons } from "../svgs/icons"

interface SearchBarProps {
    label: string
    onSubmitFunc: (event: any) => void
    set_input_value: React.Dispatch<React.SetStateAction<string>>
    set_show_results: React.Dispatch<React.SetStateAction<boolean>>
}

function SearchBar({
    label,
    onSubmitFunc,
    set_input_value,
    set_show_results,
}: SearchBarProps) {
    function handleChange(event: React.ChangeEvent) {
        const input = event.target as HTMLInputElement

        if (input.value === "") {
            set_input_value(input.value)
            set_show_results(false)
        }
    }
    return (
        <form onSubmit={e => onSubmitFunc(e)}>
            <div className="search-icon-wrapper">{icons.search}</div>
            <input
                type="search"
                name="search"
                id="search"
                placeholder=" "
                onChange={e => handleChange(e)}
            />
            <label htmlFor="search">Search for {label}</label>
        </form>
    )
}

export default SearchBar
