function Card(props) {
    return (
        <ul className="card">
            <li>Titolo: {props.movie.title}</li>
            <li>Data di rilascio: {props.movie.release_date}</li>
            <li>Voto: {props.movie.vote_average}</li>
            <li>Language: {props.movie.original_language}</li>
        </ul>
    )
}

export default Card;