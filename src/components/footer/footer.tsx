import './footer.scss';
export function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__ul">
        <div>
          <li>
            <a rel="nofollow" href="https://twitter.com/ISDICoders">
              <img
                className="footer__img"
                src="assets/img/logo-twitter.svg"
                alt="Logo to link to the ISDI Coders's Twitter page"
              ></img>
            </a>
          </li>
          <li>
            <a rel="nofollow" href="https://isdicoders.com/">
              <img
                className="footer__img"
                src="assets/img/logo-ISDI.svg"
                alt="Logo to link to the ISDI Coders's Twitter page"
              ></img>
            </a>
          </li>
        </div>
        <li className="footer__title">
          <p>ISDI coders 2023 - NASA API</p>
        </li>
        <div>
          <li>
            <a rel="nofollow" href="https://api.nasa.gov/">
              <img
                className="footer__img"
                src="assets/img/logo-NASA.svg"
                alt="Logo to link to the NASA API REST page"
              ></img>
            </a>
          </li>
          <li>
            <a rel="nofollow" href="https://twitter.com/opennasa?lang=en">
              <img
                className="footer__img"
                src="assets/img/logo-twitter.svg"
                alt="Logo to link to the Open NASA's Twitter page"
              ></img>
            </a>
          </li>
        </div>
      </ul>
    </footer>
  );
}
