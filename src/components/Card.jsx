const imgIt = "public/images/it.png"
const imgEn = "public/images/en.png"
const imgUn = "public/images/placeholder.png"

function Card(props) {

    function getFlag(stringToCheck) {
        if (stringToCheck === "en") {
            return <img src={imgEn} alt="en" />
        } else if (stringToCheck === "it") {
            return <img src={imgIt} alt="" />
        } else {
            return <img src={imgUn} alt="" />
        }
    }

    return (
        <ul className="card">
            <li>Titolo: {props.movie.title}</li>
            <li>Data di rilascio: {props.movie.release_date}</li>
            <li>Voto: {props.movie.vote_average}</li>
            <li>Language: {getFlag(props.movie.original_language)}</li>
        </ul>
    )
}

export default Card;
