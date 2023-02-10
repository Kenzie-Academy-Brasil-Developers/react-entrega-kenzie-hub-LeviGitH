import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main>
      <h1>Error 404</h1>
      <Link to="/login">
        <span>Volte à página de Login</span>
      </Link>
    </main>
  );
};
