import Cover from "../components/Cover";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Cover />
    
      <main className="main__content">
        <Outlet />
      </main>
    </>
  );
}
