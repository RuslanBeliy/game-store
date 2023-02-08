import clsx from 'clsx';
import { FC } from 'react';

import s from './SuccessOrder.module.scss';

interface SuccessOrderProps extends React.HTMLAttributes<HTMLDivElement> {
  isFinish: boolean;
}

export const SuccessOrder: FC<SuccessOrderProps> = ({ isFinish, ...props }) => {
  const classDiv = clsx(s.successOrder, isFinish && s.show);
  return (
    <div className={classDiv} {...props}>
      <h1>Спасибо за заказ =)</h1>
    </div>
  );
};
