import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { MenuOption } from '../app/App';
import './nav.scss';

export type MenuProps = {
  options: MenuOption[];
};

export function Nav({ options }: MenuProps) {
  const handleClick = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const element = document.querySelector('.menu') as HTMLElement;
    element?.classList.toggle('menu--open');
  };

  return (
    <div className="menu-container">
      <i className="fa-solid fa-bars menu-mobile" onClick={handleClick}></i>
      <ul className="menu">
        {options.map((item: MenuOption) => (
          <li key={item.label} className="menu__option" onClick={handleClick}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
