import type { Users } from "../../@types/github";
import GitHubLink from "../GitHubLink";
import { Info, InfoItem } from "../Info";
import "./_style.scss";

import { FaGithub, FaRegBuilding, FaUsers } from "react-icons/fa6";

interface Props {
  profile: Users;
}

export default function Profile({ profile }: Props) {
  return (
    <section className="container profile">
      <div className="profile__avatar">
        <img src={profile.avatar_url} alt="imagem de perfil" width={148} height={148} />
      </div>

      <div className="profile__content">
        <div className="profile__content__info">
          <h1>{profile.name}</h1>

          <GitHubLink 
            link={profile.html_url}
            text="github"
          />
        </div>

        <p>{profile.bio}</p>

        <Info>
          <InfoItem 
            icon={FaGithub}
            text={profile.login}
          />

          <InfoItem 
            icon={FaRegBuilding}
            text={profile.company || "Não informado"}
          />

          <InfoItem 
            icon={FaUsers}
            text={`${profile.followers} seguidor(es)`}
          />
        </Info>
      </div>
    </section>
  );
}
