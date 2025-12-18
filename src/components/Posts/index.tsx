import "./_style.scss";

import PostItem from "../../components/PostItem";

export default function Posts() {
  return (
    <section className="container posts">
      <article className="posts__publications">
        <div className="posts__publications__text">
          <p>Publicações</p>
          <span>6 publicações</span>
        </div>

        <form className="posts__publications__form">
          <input type="text" placeholder="Buscar conteúdo" />
        </form>
      </article>

      <ul className="posts__list">
        <li className="posts__list__item">
          <PostItem />
        </li>

        <li className="posts__list__item">
          <PostItem />
        </li>
      </ul>
    </section>
  );
}
