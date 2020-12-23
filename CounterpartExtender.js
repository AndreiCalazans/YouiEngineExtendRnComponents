import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { NativeModules, findNodeHandle } from 'react-native';

export const CounterpartExtender = forwardRef(({ component, ...remainingProps }, ref) => {
  const compRef = useRef(null);
  // Send the ref back up to parent
  useImperativeHandle(ref, () => compRef.current);
  const Comp = component;

    useEffect(() => {
        const listTag = findNodeHandle(listRef.current);
        NativeModules.CounterpartExtension.extendCounterpart(listTag);
    }, []);

  return <Comp ref={compRef}  {...remainingProps} />
})
