type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  return (
    <header className="header">
      <img
        src="assets/logo.png"
        alt="Logo formed by a icon of a rover vehicle."
        width="45px"
      />
      <h1 className="header__h1">PROGRA-MARS</h1>
      {children}
    </header>
  );
}
