import { useContext, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";

function Searchbar() {
    const [searchValue, setSearchValue] = useState("");
    const { getAll } = useContext(GlobalContext);

    function handleClick(event) {
        event.preventDefault();
        getAll(searchValue);
        setSearchValue("");
    }

    function handleKeyUp(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            getAll(searchValue);
            setSearchValue("");
        }
    }

    return (
        <>
            <nav>
                <label htmlFor="searchbar"></label>
                <input className="searchbar" type="search" id="searchbar" placeholder="Titles, people, genres..." value={searchValue} onChange={(event) => setSearchValue(event.target.value)} onKeyUp={handleKeyUp} />
                {/* <button type="submit" onClick={handleClick}>Invia</button> */}
            </nav>
        </>
    )
}

export default Searchbar;