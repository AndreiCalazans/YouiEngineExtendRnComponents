import React from 'react';

export const CounterpartExtender = ({ component, ...remainingProps }) => {
  const Comp = component;
  return <Comp  {...remainingProps} />
}
