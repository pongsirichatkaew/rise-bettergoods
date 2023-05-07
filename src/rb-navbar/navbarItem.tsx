import { FC } from 'react';
import Link from 'next/link';

type NavbarItem = {
  name: string;
  path: string;
};

export type NavbarItemProps = {
  items: NavbarItem[];
};

const NavbarItem: FC<NavbarItemProps> = (props) => {
  const { items: menuItems } = props;

  return (
    <>
      {menuItems.map((menu, index) => {
        return (
          <Link key={`MenuItem ${index}`} href={menu.path} className='sm:px-12 py-2 rounded-md text-sm font-medium'>
            {menu.name}
          </Link>
        );
      })}
    </>
  );
};

export default NavbarItem;
