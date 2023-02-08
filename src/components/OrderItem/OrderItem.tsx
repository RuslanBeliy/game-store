import { FC } from 'react';

import { AiOutlineCloseCircle } from 'react-icons/ai';

import s from './OrderItem.module.scss';

import { useAppDispatch } from '../../hooks';
import { IGame } from '../../models/game';
import { removeFromCart } from '../../redux/slices/cart-slice';

interface OrderItemProps extends IGame {}

export const OrderItem: FC<OrderItemProps> = ({ id, title, image, price }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={s.orderItem}>
      <div className={s.img}>
        <img src={image} alt={title} />
      </div>
      <div className={s.title}>
        <span>{title}</span>
      </div>
      <div className={s.price}>
        <span>{price} руб.</span>
        <AiOutlineCloseCircle size={25} className={s.remove} onClick={handleClick} />
      </div>
    </div>
  );
};
