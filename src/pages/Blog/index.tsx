import { useCallback, useEffect, useState } from "react";
import "./_style.scss";

import { getSearchIssues, getUsers } from "../../services/github";
import PostItem from "../../components/PostItem";
import Profile from "../../components/Profile";

import { type Issues, type Users } from "../../@types/github";

const USERNAME = "GabrielLaminas";

export default function Blog() {
  const [user, setUser] = useState<Users>({} as Users);
  const [issues, setIssues] = useState<Issues>({} as Issues);
  const [query, setQuery] = useState("");

  function handleQuerySearch(value: string){
    setQuery(value);
  }

  const fetchSearchIssues = useCallback(async() => {
    const data = await getSearchIssues(query);
    if(data && data.total_count){
      setIssues(data);
    }
  }, [query])

  useEffect(() => {
    async function fetchUsers(){
      const data = await getUsers(USERNAME);
      if(data) setUser(data);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    async function fetchIssues(){
      const response = await getSearchIssues(`repo:${USERNAME}/github-blog`);
      if(response) setIssues(response);
    }
    fetchIssues()
  }, [])

  useEffect(() => {
    if (!query) {
      return;
    }

    const timeoutId = setTimeout(() => {
      fetchSearchIssues();
    }, 1000);

    return () => clearTimeout(timeoutId);
       
  }, [query, fetchSearchIssues]);

  if(!user) return <p>Carregando..</p>

  return (
    <section className="container blog">
      <Profile profile={user} />
      
      <article className="blog__publications">
        <div className="blog__publications__text">
          <p>Publicações</p>
          <span>{issues.total_count ?? 0} publicações</span>
        </div>

        <form className="blog__publications__form">
          <input 
            type="search" 
            placeholder="Buscar conteúdo" 
            value={query}
            onChange={({ target }) => handleQuerySearch(target.value)}
          />
        </form>
      </article>

      <ul className="blog__list">
        {issues && issues.items && issues.items.length > 0 ? (
          issues.items.map((issue) => (
          <li key={issue.id}>
            <PostItem data={issue} />
          </li>
        ))) : (
          <li className="no-item">Não há itens</li>
        )}
      </ul>
    </section>
  );
}
