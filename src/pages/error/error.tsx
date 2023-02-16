import './error.scss';

export default function ErrorPage() {
  return (
    <div className="error">
      <h2 className="error__h2">ERROR: PAGE NOT FOUND</h2>
      <p className="error__p">
        The page you tried to reach is not within our domains.
      </p>
      <p className="error__p2">Try to go to one of our menu pages </p>
    </div>
  );
}
