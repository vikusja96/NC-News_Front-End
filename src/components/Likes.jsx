import { useState } from "react";
import { patchLikes } from "../utils/api";

const Likes = ({ article_id, article }) => {
  const [like, setLike] = useState(0);
  const [hasError, setHasError] = useState(false);

  const incLikes = () => {
    setHasError(false);

    setLike((currentLikeChange) => {
      return currentLikeChange + 1;
    });

    patchLikes(article_id, 1).catch(() => {
      setLike((currentLikeChange) => {
        return currentLikeChange - 1;
      });
    });
  };

  return (
    <section>
      <p>Likes: {article.votes + like}</p>
      {hasError && <p>Sorry! Somethig went wrong, try again later...</p>}
      <button onClick={incLikes}>👍 </button>
    </section>
  );
};

export default Likes;
