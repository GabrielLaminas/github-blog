import { useEffect, useState } from "react";
import "./_style.scss";

import { getUsers } from "../../services/github";
import PostItem from "../../components/PostItem";
import Profile from "../../components/Profile";

import type { Users } from "../../@types/github";

const USERNAME = "GabrielLaminas";

export default function Blog() {
  const [user, setUser] = useState<Users>({} as Users);

  useEffect(() => {
    async function fetchUsers(){
      const data = await getUsers(USERNAME);
      if(data) setUser(data);
    }
    fetchUsers();
  }, []);

  if(!user) return <p>Carregando..</p>

  return (
    <section className="container blog">
      <Profile profile={user} />
      
      <article className="blog__publications">
        <div className="blog__publications__text">
          <p>Publicações</p>
          <span>6 publicações</span>
        </div>

        <form className="blog__publications__form">
          <input type="text" placeholder="Buscar conteúdo" />
        </form>
      </article>

      <ul className="blog__list">
        <li className="blog__list__item">
          <PostItem link={`post/123`} />
        </li>

        <li className="blog__list__item">
          <PostItem link={`post/1234`}  />
        </li>
      </ul>
    </section>
  );
}
