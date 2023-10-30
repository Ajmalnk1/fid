import { memo, SVGProps } from 'react';

const Group11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.36665 16L5.56665 12.2L6.51665 11.25L9.36665 14.1L15.4833 7.98333L16.4333 8.93333L9.36665 16Z'
      fill='#222222'
    />
    <circle cx={11.5} cy={11.5} r={11.5} stroke='black' />
  </svg>
);
const Memo = memo(Group11Icon);
export { Memo as Group11Icon };