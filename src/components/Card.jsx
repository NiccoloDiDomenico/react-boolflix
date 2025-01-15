const imgIt = "public/images/it.png"
const imgEn = "public/images/en.png"
const imgUn = "public/images/placeholder.png"

function Card(props) {

    function getFlag(stringToCheck) {
        if (stringToCheck === "en") {
            return <img src={imgEn} alt="en" />
        } else if (stringToCheck === "it") {
            return <img src={imgIt} alt="it" />
        } else {
            return <img src={imgUn} alt="un" />
        }
    }

    return (
        <ul className="card">
            <li>Titolo: {props.item.title || props.item.name}</li>
            <li>Data di rilascio: {props.item.release_date}</li>
            <li>Voto: {props.item.vote_average}</li>
            <li>Language: {getFlag(props.item.original_language)}</li>
        </ul>
    )
}

export default Card;
