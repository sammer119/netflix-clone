import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // fetchUrl as a dependency, we are using a variable which is being passed from outside the block. So useEffect knows that something changed so I need to rerun the code.
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        className={`row__poster ${
                            isLargeRow && "row__posterLarge"
                        }`}
                        onClick={() => handleClick(movie)}
                        src={`${baseUrl}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.original_name}
                        key={movie.id}
                    />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opt={opts} />}
        </div>
    );
}

export default Row;
