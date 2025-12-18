import "./_style.scss";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface Props {
  link: string;
  text: string;
}

export default function GitHubLink({ link, text }: Props) {
  return (
    <Link to={link} className="link">
      {text}
      <FaArrowUpRightFromSquare color="#3294F8" />
    </Link>
  );
}
