function Card(props) {
    return (
        <article className="card">
            <div>{props.movie.title}</div>
            <div>{props.movie.release_date}</div>
            <div>{props.movie.original_language}</div>
            <div>{props.movie.vote_average}</div>
        </article>
    )
}

export default Card;