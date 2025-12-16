import GitHubLink from "../../components/GitHubLink";
import { Info, InfoItem }from "../../components/Info";
import "./_style.scss";

import { FaAngleLeft, FaGithub, FaCalendarDay, FaComment } from "react-icons/fa6";

export default function Post() {
  return(
    <section>
      <article className="container post__info">
        <div className="post__info__header">
          <a className="info__header__backbutton" href="#">
            <FaAngleLeft color="#3294F8" />
            Voltar
          </a>  

          <GitHubLink 
            link="#"
            text="ver no github"
          />
        </div>

        <h1>JavaScript data types and data structures</h1>

        <Info>
          <InfoItem 
            icon={FaGithub}
            text="cameronwll"
          />

          <InfoItem 
            icon={FaCalendarDay}
            text="Há 1 dia"
          />

          <InfoItem 
            icon={FaComment}
            text="5 comentários"
          />
        </Info>
      </article>

      <article className="container post__content">
        <p>
          <strong>Programming languages all have built-in data structures, but these often differ from one language to another.</strong> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
        </p>

        <p>
          Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>

        <pre>
          <code>
            let foo = 42;
            foo = 'bar';
            foo = true;
          </code>
        </pre>
      </article>
    </section>
  );
}
