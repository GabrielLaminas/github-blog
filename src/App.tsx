import Cover from "./components/Cover";
import Profile from "./components/Profile";
import Posts from "./components/Posts";

export default function App() {
  return (
    <>
      <Cover />

      <main className="main__content">
        <Profile />
        <Posts />
      </main>
    </>
  );
}
