import { memo, SVGProps } from 'react';

const MdiLeadsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M30 12C36.6 12 42 17.4 42 24C42 30.6 36.6 36 30 36C23.4 36 18 30.6 18 24C18 17.4 23.4 12 30 12ZM51 63L56.4 68.31C57.9 69.81 60 68.61 60 66.84V54L68.4 43.8C68.7343 43.3543 68.9378 42.8243 68.9879 42.2694C69.0379 41.7145 68.9324 41.1567 68.6833 40.6584C68.4341 40.16 68.0511 39.741 67.5772 39.448C67.1033 39.1551 66.5571 39 66 39H45C42.6 39 41.1 42 42.6 43.8L51 54V63ZM45 56.1L38.1 47.7C36.9 46.2 36.3 44.4 36.3 42.6C34.2 42 32.1 42 30 42C16.8 42 6 47.4 6 54V60H45V56.1Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(MdiLeadsIcon);
export { Memo as MdiLeadsIcon };
