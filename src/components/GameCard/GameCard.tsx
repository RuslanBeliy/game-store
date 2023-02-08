import { FC } from 'react';

import { Link } from 'react-router-dom';

import s from './GameCard.module.scss';

import { AddToCart } from '..';
import { IGame } from '../../models/game';

interface GameCardProps {
  game: IGame;
}

export const GameCard: FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`} className={s.gameCard}>
      <div className={s.info}>
        <div className={s.img}>
          <img src={game.image} alt='' />
        </div>
        <div className={s.title}>{game.title}</div>
        <div className={s.genre}>
          {game.genres.map((el, i) => (
            <div key={i} className={s.genreItem}>
              {el}
            </div>
          ))}
        </div>
        <AddToCart game={game} />
      </div>
    </Link>
  );
};
