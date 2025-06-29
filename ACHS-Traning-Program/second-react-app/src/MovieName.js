function MovieDetail(props){
    return(
        <ol>
            {
                props.profiles.map((profile) => {
                    const name = props.users[profile.userID].name;
                    const favMovie = props.movies[profile.favoriteMovieID].name
                    return(
                        <li 
                            key={profile.id}
                            className="contact-list-item"
                        >
                            {`${name}'s favorite movie is ${favMovie}`}</li>
                        );
                })
            }
        </ol>
    );
    

}

export default MovieDetail;