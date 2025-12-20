import { Link } from "react-router-dom";
import "./_style.scss";
import type { Items } from "../../@types/github";

import { formatDistanceToNow } from "date-fns";

interface Props {
  data: Items;
}

export default function PostItem({ data }: Props) {
  return(
    <Link to={`post/${data.id}`} className="post__card">
      <div className="post__card__title">
        <h2>{data.title}</h2>
        <span>{formatDistanceToNow(data.created_at, { addSuffix: true })}</span>
      </div>

      <p>{data.body}</p>
    </Link>
  );
}
