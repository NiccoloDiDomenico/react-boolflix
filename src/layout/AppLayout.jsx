import Searchbar from "../components/Searchbar"
import Home from "../pages/Home";

function AppLayout() {
    return (
        <>
            <header>
                <Searchbar />
            </header>
            <main>
                <Home />
            </main>
        </>
    )
}

export default AppLayout;