import React, { useRef } from 'react';

export const CounterpartExtender = ({ component, ...remainingProps }) => {
  const compRef = useRef(null);
  const Comp = component;
  return <Comp ref={compRef}  {...remainingProps} />
}
