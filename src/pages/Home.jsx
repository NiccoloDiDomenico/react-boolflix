import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Card from "../components/Card";

function Home() {
    const { movies, series } = useContext(GlobalContext);

    return (
        <>
            <section className="container">
                {/* Film */}
                <h1>Film</h1>
                <div className="row">
                    {
                        movies.map((curItem) => (
                            <div key={curItem.id} className="col" >
                                <Card item={curItem} />
                            </div>
                        ))
                    }
                </div>
                {/* Series */}
                <h1>Serie TV</h1>
                <div className="row">
                    {
                        series.map((curItem) => (
                            <div key={curItem.id} className="col" >
                                <Card item={curItem} />
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Home;