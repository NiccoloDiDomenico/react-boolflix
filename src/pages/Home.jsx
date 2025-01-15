import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Card from "../components/Card";


function Home() {
    const { movies, series } = useContext(GlobalContext);

    return (
        <>
            {/* Welcome seection */}
            {
                movies.length <= 0 && (
                    <section className="welcome-section container">
                        <h1>Benvenuto.</h1>
                        <p>Milioni di film, serie TV e persone da scoprire. Esplora ora.</p>
                    </section>
                )
            }
            {/* List section */}
            {
                [movies, series].map((curList, index) => (
                    curList.length > 0 && (
                        <section className="list-section container">
                            <h1>{index === 0 ? 'Film' : 'Serie TV'}</h1>
                            <div className="row">
                                {
                                    curList.map((curItem) => (
                                        <div className="col" >
                                            <Card key={curItem.id} item={curItem} />
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                    )
                ))
            }
        </>
    )
}

export default Home;