import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Card from "../components/Card";

function Home() {
    const { movies } = useContext(GlobalContext);

    return (
        <>
            <section className="container">
                <h1>La tua libreria...</h1>
                <div className="row">
                    {
                        movies.map((curMovie) => (
                            <div key={curMovie.id} className="col" >
                                <Card movie={curMovie} />
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Home;