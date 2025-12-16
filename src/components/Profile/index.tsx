import GitHubLink from "../GitHubLink";
import { Info, InfoItem } from "../Info";
import "./_style.scss";

import { FaGithub, FaRegBuilding, FaUsers } from "react-icons/fa6";


export default function Profile() {
  return (
    <section className="container profile">
      <div className="profile__avatar">
        <img src="https://avatars.githubusercontent.com/u/93532694?v=4" alt="" />
      </div>

      <div className="profile__content">
        <div className="profile__content__info">
          <h1>Cameron Williamson</h1>

          <GitHubLink 
            link="#"
            text="github"
          />
        </div>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </p>

        <Info>
          <InfoItem 
            icon={FaGithub}
            text="cameronwll"
          />

          <InfoItem 
            icon={FaRegBuilding}
            text="Rocketseat"
          />

          <InfoItem 
            icon={FaUsers}
            text="32 seguidores"
          />
        </Info>
      </div>
    </section>
  );
}
