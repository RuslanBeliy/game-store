import { FC, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import s from './FullGame.module.scss';

import { AddToCart, Spinner } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOneGame } from '../../redux/slices/games-slice';

interface FullGameProps {}

export const FullGame: FC<FullGameProps> = () => {
  const params = useParams() as { id: string };
  const { game, status } = useAppSelector((state) => state.games.oneGame);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOneGame(params));
  }, []);

  if (status === 'error') {
    return <h1 className={s.error}>Произошла ошибка =( попробуйте позже</h1>;
  }

  if (status === 'loading') {
    // return <h1 className={s.load}>Loading...</h1>;
    return <Spinner />;
  }

  if (!game) {
    return null;
  }

  return (
    <div className={s.fullGame}>
      <h1 className={s.title}>{game?.title}</h1>
      <div className={s.content}>
        <div className={s.left}>
          <iframe
            frameBorder={'none'}
            width='90%'
            height='400px'
            src={game?.video}
            title='YouTube video'
          ></iframe>
        </div>
        <div className={s.right}>
          <div className={s.img}>
            <img src={game?.image} alt='' />
          </div>
          <p>{game?.description}</p>
          <p className={s.txt}>Популярные метки этого продукта:</p>
          <div className={s.genre}>
            {game?.genres.map((el, i) => (
              <div key={i} className={s.genreItem}>
                {el}
              </div>
            ))}
          </div>
          <AddToCart game={game} />
        </div>
      </div>
    </div>
  );
};
