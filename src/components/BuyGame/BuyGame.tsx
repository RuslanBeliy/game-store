import clsx from 'clsx';
import { FC } from 'react';

import { Link } from 'react-router-dom';

import s from './BuyGame.module.scss';

import { Button } from '../Button/Button';

interface BuyGameProps {
  totalCount: number;
}

export const BuyGame: FC<BuyGameProps> = ({ totalCount }) => {
  return (
    <div className={s.wrap}>
      <div className={s.totalPrice}>
        <span>Итого: </span>
        <span>{totalCount} руб.</span>
      </div>
      <Button className={clsx(!totalCount && s.dis)} variant='primary' size='m'>
        <Link to='/order'>Оформить заказ</Link>
      </Button>
    </div>
  );
};
