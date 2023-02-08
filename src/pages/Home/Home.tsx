import { FC, useEffect } from 'react';

import s from './Home.module.scss';

import { GameCard, Skeleton } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchGames } from '../../redux/slices/games-slice';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const { items, status } = useAppSelector((state) => state.games.allGames);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  if (status === 'error') {
    return <h1 className={s.error}>Произошла ошибка =( попробуйте позже</h1>;
  }

  return (
    <div className={s.home}>
      {status === 'loading'
        ? [...Array(6)].map((_, i) => <Skeleton key={i} />)
        : items.map((el) => <GameCard key={el.id} game={el} />)}
    </div>
  );
};
