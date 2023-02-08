import { FC, useState } from 'react';

import s from './Order.module.scss';

import { Button, OrderItem, SuccessOrder } from '../../components';
import { useAppSelector } from '../../hooks';
import { calcTotalPrice } from '../../utils';

interface OrderProps {}

export const Order: FC<OrderProps> = () => {
  const items = useAppSelector((state) => state.cart.items);
  const [isFinish, setIsFinish] = useState(false);

  if (!items.length) {
    return <h1 className={s.title}>Ваша корзина пуста</h1>;
  }
  return (
    <div className={s.order}>
      <div className={s.left}>
        {items.map((el) => (
          <OrderItem key={el.id} {...el} />
        ))}
      </div>
      <div className={s.right}>
        <div className={s.price}>
          <span>Общая сумма заказа: {calcTotalPrice(items)} руб.</span>
        </div>
        <Button onClick={() => setIsFinish(true)}>Завершить заказ</Button>
      </div>

      <SuccessOrder onClick={() => setIsFinish(false)} isFinish={isFinish} />
    </div>
  );
};
