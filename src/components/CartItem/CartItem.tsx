import { FC } from 'react';

import { AiOutlineCloseCircle } from 'react-icons/ai';

import s from './CartItem.module.scss';

import { useAppDispatch } from '../../hooks';
import { IGame } from '../../models/game';
import { removeFromCart } from '../../redux/slices/cart-slice';

interface CartItemProps extends IGame {}

export const CartItem: FC<CartItemProps> = ({ id, title, image, price }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={s.cartItem}>
      <div className={s.wrap}>
        <img src={image} alt='' />
        <span>{title}</span>
      </div>
      <div className={s.price}>
        <span>{price} руб.</span>
        <AiOutlineCloseCircle size={25} className={s.remove} onClick={handleClick} />
      </div>
    </div>
  );
};
