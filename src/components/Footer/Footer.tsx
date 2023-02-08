import { FC } from 'react';

import s from './Footer.module.scss';

interface FooterProps {};

export const Footer: FC<FooterProps> = () => {
	return (
		<footer className={ s.footer }></footer>
	)
};
