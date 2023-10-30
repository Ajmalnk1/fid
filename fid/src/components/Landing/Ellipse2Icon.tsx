import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 281 281' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={140.5} cy={140.5} r={140.5} fill='white' />
  </svg>
);
const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
