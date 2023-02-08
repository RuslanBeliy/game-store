import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';

import { CartButton, CartMenu } from '..';
import { useAppSelector } from '../../hooks';
import { calcTotalPrice } from '../../utils';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const items = useAppSelector((state) => state.cart.items);

  const toggleMenu = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    setIsOpenMenu((prev) => !prev);
  }, []);

  return (
    <header className={s.header}>
      <div className={s.link}>
        <Link to='/'>GameStore</Link>
      </div>
      <div className={s.cart}>
        <CartButton
          totalItems={items.length}
          totalCount={calcTotalPrice(items)}
          toggleMenu={toggleMenu}
        />
        {isOpenMenu && (
          <CartMenu
            totalCount={calcTotalPrice(items)}
            items={items}
            setIsOpenMenu={setIsOpenMenu}
          />
        )}
      </div>
    </header>
  );
};
