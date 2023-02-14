import { Link } from 'react-router-dom';
import { MenuOption } from '../app/App';

export type MenuProps = {
  options: MenuOption[];
};

export function Nav({ options }: MenuProps) {
  return (
    <ul className="menu">
      {options.map((item) => (
        <li key={item.label} className="menu__option">
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}
