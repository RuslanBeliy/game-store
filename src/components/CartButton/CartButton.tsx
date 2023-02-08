import { FC } from 'react';
import { BiCartAlt } from 'react-icons/bi';

import s from './CartButton.module.scss';

interface CartButtonProps {
  totalCount: number;
  totalItems: number;
  toggleMenu: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const CartButton: FC<CartButtonProps> = ({ totalCount, totalItems, toggleMenu }) => {
  return (
    <div className={s.box}>
      <button onClick={toggleMenu} className={s.cart}>
        <span className={s.countItems}>{totalItems}</span>
        <BiCartAlt className={s.icon} color='#fff' />
      </button>
      {!!totalCount && <span className={s.price}>{totalCount} руб.</span>}
    </div>
  );
};
