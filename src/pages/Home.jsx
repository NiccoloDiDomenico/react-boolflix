import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Card from "../components/Card";


function Home() {
    const { movies, series } = useContext(GlobalContext);

    return (
        <>
            {/* Movies & series section */}
            <section className="container">
                {
                    [movies, series].map((curList, index) => (
                        curList.length > 0 && (
                            <>
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
                            </>
                        )
                    )
                    )}
            </section>
        </>
    )
}

export default Home;