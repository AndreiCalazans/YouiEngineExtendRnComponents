import React, { useRef, forwardRef, useImperativeHandle } from 'react';

export const CounterpartExtender = forwardRef(({ component, ...remainingProps }, ref) => {
  const compRef = useRef(null);
  // Send the ref back up to parent
  useImperativeHandle(ref, () => compRef.current);
  const Comp = component;
  return <Comp ref={compRef}  {...remainingProps} />
})
