import "./_style.scss";

import LogoGitHub from "../../assets/logo-githubblog.svg"

export default function Cover() {
  return (
    <section className="cover">
      <img src={LogoGitHub} width={148} height={98} alt="cursor com nome git hub" />
    </section>
  );
}
