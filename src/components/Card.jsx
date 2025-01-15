import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStar as faStarEmpty } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
    const { apiUrlImg } = useContext(GlobalContext);

    function renderFlag(stringToCheck) {
        let language = ['it', 'en']
        if (language.includes(stringToCheck)) {
            return <img src={`public/images/${stringToCheck}.png`} />
        } else {
            return <img src={`public/images/placeholder.png`} alt="un" />
        }
    }

    function renderStars(vote) {
        const stars = Math.ceil(vote / 2); // Converte voto da 1-10 a 1-5 arrotondanda per eccesso
        const fullStars = Array(stars).fill(<FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />); // crea un nuovo array dalla lunghezza di stars e lo riempe di stelle piene
        const emptyStars = Array(5 - stars).fill(<FontAwesomeIcon icon={faStarEmpty} style={{ color: "#ccc" }} />); // crea un nuovo array 5 - le stelle del voto e lo riempie di stelle vuote

        return [...fullStars, ...emptyStars]; // tramite spread operator ottengo la somma dei due array
    }

    return (
        <>
            <div className="card">
                {/* Card img */}
                <div className="card-img">
                    <img src={props.item.poster_path !== null ? `${apiUrlImg}w342${props.item.poster_path}` : `https://placehold.co/342x520`} alt={props.item.title || props.item.name} />
                </div>
                {/* Card body */}
                <ul className="card-body">
                    <li>Titolo: {props.item.title || props.item.name}</li>
                    <li>Data di rilascio: {props.item.release_date}</li>
                    <li>Voto: {renderStars(props.item.vote_average)}</li>
                    <li>Language: {renderFlag(props.item.original_language)}</li>
                </ul>
            </div>
        </>
    )
}

export default Card;
