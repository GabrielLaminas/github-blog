import "./_style.scss";

import { FaArrowUpRightFromSquare, FaGithub, FaRegBuilding, FaUsers } from "react-icons/fa6";


export default function Profile() {
  return (
    <section className="container profile">
      <div className="profile__avatar">
        <img src="https://avatars.githubusercontent.com/u/93532694?v=4" alt="" />
      </div>

      <div className="profile__content">
        <div className="profile__content__info">
          <h1>Cameron Williamson</h1>
          <a href="#">
            github
            <FaArrowUpRightFromSquare color="#3294F8" />
          </a>
        </div>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </p>

        <ul className="profile__content__list">
          <li>
            <FaGithub color="#3A536B" />
            cameronwll
          </li>

          <li>
            <FaRegBuilding color="#3A536B" />
            cameronwll
          </li>

          <li>
            <FaUsers color="#3A536B" />
            cameronwll
          </li>
        </ul>
      </div>
    </section>
  );
}
