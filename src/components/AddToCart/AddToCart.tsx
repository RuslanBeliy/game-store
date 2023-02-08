import { FC, useCallback } from 'react';

import s from './AddToCart.module.scss';

import { Button } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IGame } from '../../models/game';
import { addToCart, removeFromCart } from '../../redux/slices/cart-slice';

interface AddToCartProps {
  game: IGame;
}

export const AddToCart: FC<AddToCartProps> = ({ game }) => {
  const dispatch = useAppDispatch();

  const isItemInCart = useAppSelector((state) => state.cart.items.some((el) => el.id === game.id));

  const addCart = useCallback((item: IGame) => {
    dispatch(addToCart(item));
  }, []);

  const removeCart = useCallback((id: string) => {
    dispatch(removeFromCart(id));
  }, []);

  return (
    <div className={s.buyBox}>
      <div className={s.price}>{game.price} руб.</div>
      {isItemInCart ? (
        <Button className={s.btn} variant='secondary' size='m' onClick={() => removeCart(game.id)}>
          Убрать из корзины
        </Button>
      ) : (
        <Button className={s.btn} variant='primary' size='m' onClick={() => addCart(game)}>
          В корзину
        </Button>
      )}
    </div>
  );
};
