import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleMovie() {
  const [imdb, setImdb] = useState("");
  const [tmdb, setTmdb] = useState("");
  const [moviename, setMoviename] = useState("");

  let param = useParams();
  console.log();

  useEffect(() => {
    const data = param.id;

    const pattern = /tt(\d+)-numbertwo-(\d+)-moviename-(.*)/;

    // Use the match method to extract substrings based on the pattern
    const matches = data.match(pattern);
    if (matches) {
      const ttNumber = matches[1]; // tt8639168
      setImdb(ttNumber);
      const numbertwo = matches[2]; // 1202188
      setTmdb(numbertwo);
      const movieName = matches[3]; // Crawlers%20(2025)
      const movieNames = movieName.replace(/%/g, " ");
      setMoviename(movieNames);
    } else {
      console.log("No matches found.");
    }
  }, [param.id]);
  console.log(imdb);
  return (
    <div>
      <iframe
        width={"100%"}
        height={"800px"}
        src={`https://vidsrc.to/embed/movie/tt${imdb}`}
        allowfullscreen
      ></iframe>
      <h1 className=" text-[55px] font-bold">{moviename}</h1>
    </div>
  );
}
