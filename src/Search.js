import { useMemo, useState } from "react";
import { data } from "./data";

function Search() {
    const [text, setText] = useState("")
    const [search, setSearch] = useState("")

    const handleText = (e) => {
        setText(e.target.value); 
    }
    const handleSearch = () => {
        setSearch(text)
    }

    const filteredProducts = useMemo( () => data.filter((data) => {
        return data.item.toLowerCase().includes(search.toLowerCase())
    }), [search])

    return (
        <div>
            <h2>search</h2>
            <input type="text" onChange={handleText}/>
            <button type="button" onClick={handleSearch}>search</button>
            {filteredProducts.map((filteredProducts) => (
                <p key={filteredProducts.id}>{filteredProducts.item}</p>
            ))}
        </div>
    );
}

export default Search;