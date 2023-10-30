import { memo, SVGProps } from 'react';

const MapInsuranceAgencyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 74 74' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M37.7563 4.28016L1.87664 34.04H10.36V69.56H63.64V34.04H72.9166L37.7563 4.28016ZM45.7942 59.2H28.9976L32.52 43.3477C30.3903 41.8677 28.9976 39.6388 28.9976 36.9097C28.9976 32.4135 32.7583 28.86 37.3952 28.86C42.035 28.86 45.7942 32.5496 45.7942 37.0459C45.7942 39.7765 44.4015 41.8485 42.2732 43.324L45.7942 59.2Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(MapInsuranceAgencyIcon);
export { Memo as MapInsuranceAgencyIcon };
