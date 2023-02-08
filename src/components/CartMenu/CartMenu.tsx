import { FC, useCallback, useEffect, useRef } from 'react';

import s from './CartMenu.module.scss';

import { BuyGame, CartItem } from '..';
import { IGame } from '../../models/game';

interface CartMenuProps {
  items: IGame[];
  totalCount: number;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartMenu: FC<CartMenuProps> = ({ totalCount, items, setIsOpenMenu }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleListener = useCallback((e: MouseEvent) => {
    if (menuRef.current && !e.composedPath().includes(menuRef.current)) {
      setIsOpenMenu(false);
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', handleListener);
    return () => {
      document.body.removeEventListener('click', handleListener);
    };
  }, []);

  return (
    <div ref={menuRef} className={s.cartMenu}>
      <div className={s.list}>
        {items.length ? (
          items.map((el) => <CartItem key={el.id} {...el} />)
        ) : (
          <h2>Корзина пуста</h2>
        )}
      </div>
      <BuyGame totalCount={totalCount} />
    </div>
  );
};
