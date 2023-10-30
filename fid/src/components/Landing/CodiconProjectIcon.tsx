import { memo, SVGProps } from 'react';

const CodiconProjectIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 69 68' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.46875 4.25H62.5312L64.6875 6.375V61.625L62.5312 63.75H6.46875L4.3125 61.625V6.375L6.46875 4.25ZM8.625 59.5H60.375V8.5H8.625V59.5ZM12.9375 12.75H21.5625V55.25H12.9375V12.75ZM38.8125 12.75H30.1875V38.25H38.8125V12.75ZM47.4375 12.75H56.0625V46.75H47.4375V12.75Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(CodiconProjectIcon);
export { Memo as CodiconProjectIcon };
