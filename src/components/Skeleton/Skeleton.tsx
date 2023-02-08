import { FC } from 'react';
import ContentLoader from 'react-content-loader';

import s from './Skeleton.module.scss';

interface SkeletonProps {}

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={300}
    viewBox='0 0 300 300'
    backgroundColor='#242529'
    foregroundColor='#242529'
  >
    <rect x='105' y='447' rx='0' ry='0' width='0' height='1' />
    <rect x='10' y='2' rx='10' ry='10' width='284' height='168' />
    <rect x='10' y='189' rx='10' ry='10' width='282' height='56' />
    <rect x='10' y='266' rx='10' ry='10' width='115' height='29' />
    <rect x='144' y='261' rx='10' ry='10' width='148' height='36' />
  </ContentLoader>
);
