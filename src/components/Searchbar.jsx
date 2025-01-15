import { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";


function Searchbar() {
    const [searchValue, setSearchValue] = useState("");
    const { getMovies, getSeries } = useContext(GlobalContext);

    function handleClick(event) {
        event.preventDefault();
        getMovies(searchValue);
        getSeries(searchValue);
        setSearchValue("");
    }

    function handleKeyUp(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            getMovies(searchValue);
            getSeries(searchValue);
            setSearchValue("");
        }
    }

    return (
        <>
            <nav className="container">
                <label htmlFor="searchbar"></label>
                <input type="search" id="searchbar" placeholder="Cerca..." value={searchValue} onChange={(event) => setSearchValue(event.target.value)} onKeyUp={handleKeyUp} />
                <button type="submit" onClick={handleClick}>Invia</button>
            </nav>
        </>
    )
}

export default Searchbar;