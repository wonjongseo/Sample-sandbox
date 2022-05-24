import React from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  React.useEffect(() => {
    getMoive();
  }, []);

  return loading ? (
    <strong></strong>
  ) : (
    <Movie
      id={movie.id}
      title={movie.title}
      coverImg={movie.medium_cover_image}
      summary={movie.summary}
      genres={movie.genres}
    />
  );
};
export default Detail;
