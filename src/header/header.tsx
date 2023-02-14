import './header.scss';

type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  return (
    <header className="header">
      <img
        src="assets/img/logo.png"
        alt="Logo formed by a icon of a rover vehicle."
        className="header__img"
      />
      <h1 className="header__h1">PROGRA-MARS</h1>
      {children}
    </header>
  );
}
