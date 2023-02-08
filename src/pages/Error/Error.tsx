import { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './Error.module.scss';

import { Footer, Header } from '../../components';

interface ErrorProps {}

export const Error: FC<ErrorProps> = () => {
  return (
    <div className={s.layout}>
      <Header />
      <div className={s.error}>
        <h1>
          Oops...Такой страницы не существует{' '}
          <Link className={s.link} to='/'>
            вернуться на главную
          </Link>
        </h1>
      </div>
      <Footer />
    </div>
  );
};
