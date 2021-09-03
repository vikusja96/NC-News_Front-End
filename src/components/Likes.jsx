import { useState } from "react";
import { patchLikes } from "../utils/api";

const Likes = ({ article_id, article }) => {
  const [like, setLike] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoding] = useState(false);

  const incLikes = () => {
    setHasError(false);

    setLike((currentLikeChange) => {
      setIsLoding(true);
      return currentLikeChange + 1;
    });
    setIsLoding(false);
    patchLikes(article_id, 1).catch(() => {
      setLike((currentLikeChange) => {
        return currentLikeChange - 1;
      });
    });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <p>Likes: {article.votes + like}</p>
      {hasError && <p>Sorry! Somethig went wrong, try again later...</p>}
      <button onClick={incLikes}>👍 </button>
    </section>
  );
};

export default Likes;
