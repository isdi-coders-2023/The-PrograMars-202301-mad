import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <main className="error">
      <h2 className="error__h2">ERROR: PAGE NOT FOUND</h2>
      <p className="error__p">
        The page you tried to reach is not within our domains. =( Try to go to
        one of our menu pages =)
      </p>
    </main>
  );
}
