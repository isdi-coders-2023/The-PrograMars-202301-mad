import './footer.scss';
export function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a rel="nofollow" href="https://twitter.com/ISDICoders">
            <img
              src="assets/img/logo-twitter.svg"
              alt="Logo to link to the ISDI Coders's Twitter page"
            ></img>
          </a>
        </li>
        <li>
          <a rel="nofollow" href="https://isdicoders.com/">
            <img
              src="assets/img/logo-ISDI.svg"
              alt="Logo to link to the ISDI Coders's Twitter page"
            ></img>
          </a>
        </li>
        <li>
          <p>ISDI coders 2023 - NASA API</p>
        </li>
        <li>
          <a rel="nofollow" href="https://api.nasa.gov/">
            <img
              src="assets/img/logo-NASA.svg"
              alt="Logo to link to the NASA API REST page"
            ></img>
          </a>
        </li>
        <li>
          <a rel="nofollow" href="https://twitter.com/opennasa?lang=en">
            <img
              src="assets/img/logo-twitter.svg"
              alt="Logo to link to the Open NASA's Twitter page"
            ></img>
          </a>
        </li>
      </ul>
    </footer>
  );
}
