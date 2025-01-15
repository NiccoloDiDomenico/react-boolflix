import Searchbar from "../components/Searchbar"
import Home from "../pages/Home";

function AppLayout() {
    return (
        <>
            <header>
                <div className="header container">
                    <h1 className="logo">BOOLFLIX</h1>
                    <Searchbar />
                </div>
            </header>
            <main>
                <Home />
            </main>
        </>
    )
}

export default AppLayout;