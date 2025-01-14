import { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";


function Searchbar() {
    const [searchValue, setSearchValue] = useState("");
    const { getMovies } = useContext(GlobalContext);

    function handleClick(event) {
        event.preventDefault();
        getMovies(searchValue);
        setSearchValue("");
    }

    return (
        <>
            <nav className="container">
                <label htmlFor="searchbar"></label>
                <input type="search" id="searchbar" placeholder="Cerca..." value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
                <button type="submit" onClick={handleClick}>Invia</button>
            </nav>
        </>
    )
}

export default Searchbar;