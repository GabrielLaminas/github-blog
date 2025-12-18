import { Link } from "react-router-dom";
import "./_style.scss";

interface Props {
  data?: {
    title: string;
    date: Date;
    description: string;
  }
  link: string;
}

export default function PostItem({ data = undefined, link }: Props) {
  return(
    <Link to={link} className="post__card">
      <div className="post__card__title">
        <h2>JavaScript data types and data structures</h2>
        <span>Há 1 dia</span>
      </div>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat adipisci consequatur, mollitia eligendi unde necessitatibus accusamus blanditiis exercitationem molestias officia voluptates incidunt maiores repellendus distinctio nisi! Rem labore repellat minima.</p>
    </Link>
  );
}
