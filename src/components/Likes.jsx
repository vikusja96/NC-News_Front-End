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
      <div className="Article__likes-comments">
      <button onClick={incLikes}> 👍 &nbsp;Like</button>
      <p className="Article__likes">👍 &nbsp;{article.votes + like}</p>
      <p>💬 &nbsp; {article.comment_count}</p>
      </div>
      {hasError && <p>Sorry! Somethig went wrong, try again later...</p>}
    </section>
  );
};

export default Likes;
